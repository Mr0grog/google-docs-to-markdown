'use strict';

import { h as hast } from 'hastscript';
import { CONTINUE, EXIT, visit } from 'unist-util-visit';
import { visitParents } from 'unist-util-visit-parents';
import { resolveNodeStyle } from './css.js';

const blockElements = new Set([
  'address',
  'article',
  'aside',
  'blockquote',
  'caption',
  'center',  // historic
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir',  // historic
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'frameset',  // historic
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hgroup',
  'hr',
  'isindex',  // historic
  'li',
  'main',
  'menu',
  'nav',
  'noframes',  // historic
  'ol',
  'p',
  'pre',
  'section',
  'summary',
  'table',
  'thead',
  'tbody',
  'tfoot',
  'td',
  'th',
  'tr',
  'ul'
]);

// These elements convert to Markdown nodes that can't start or end with spaces.
// For example, you can't start emphasis with a space: `This * is emphasized*`.
const spaceSensitiveElements = new Set([
  'em',
  'strong',
]);

const isList = node => node.tagName === 'ul' || node.tagName === 'ol';
const isStyled = node => node.type === 'element' && node.properties.style;
const isBlock = node => node && blockElements.has(node.tagName);
const isSpaceSensitive = node => node && spaceSensitiveElements.has(node.tagName);
const isCell = (node) => node.tagName === 'th' || node.tagName === 'td';

const spaceAtStartPattern = /^(\s+)/;
const spaceAtEndPattern = /(\s+)$/;

// Wrap the children of `node` with the `wrapper` node.
function wrapChildren (node, wrapper) {
  wrapper.children = node.children;
  node.children = [wrapper];
  return wrapper;
}

/**
 * Fix the incorrect formatting of nested lists in Google Docs's HTML. Lists
 * can only have `div` and `li` children, but Google Docs has other lists as
 * direct descendents. This moves those free-floating lists into the previous
 * `li` element under the assumption that they represent subitems of it.
 *
 * @param {RehypeNode} node Fix the tree below this node
 *
 * @example
 * Input a tree like:
 *    <ul>
 *      <li>An item!</li>
 *      <ul>
 *        <li>A subitem!</li>
 *      </ul>
 *    </ul>
 *
 * Output:
 *    <ul>
 *      <li>An Item!
 *        <ul>
 *          <li>A subitem!</li>
 *        </ul>
 *      </li>
 *    </ul>
 */
export function fixNestedLists (node) {
  visit(node, isList, (node, index, parent) => {
    if (isList(parent)) {
      const previous = parent.children[index - 1];
      if (previous && previous.tagName === 'li') {
        previous.children.push(node);
        parent.children.splice(index, 1);
        return index;
      }
      else {
        console.warn('No previous list item to move nested list into!');
      }
    }
  });
}

/**
 * Google Docs does italics/bolds/etc on `<span>`s with style attributes, but
 * rehype-remark does not pick up on those. Instead, transform them into
 * semantic `em`, `strong`, etc. elements.
 *
 * @param {RehypeNode} node Fix the tree below this node
 */
export function unInlineStyles (node) {
  convertInlineStylesToElements(node);
  mergeConsecutiveInlineStyles(node);
}

/**
 * @private
 * Convert CSS in style attribtutes to semantic elements that are more readily
 * converted to Markdown.
 * @param {RehypeNode} node Fix the tree below this node
 */
function convertInlineStylesToElements(node) {
  visitParents(node, n => isStyled(n) && !isBlock(n), (node, parents) => {
    const style = resolveNodeStyle(node, parents);

    if (style['font-style'] === 'italic') {
      wrapChildren(node, hast('em'));
    }

    const weight = style['font-weight'];
    if (weight === 'bold' || weight === '700') {
      wrapChildren(node, hast('strong'));
    }

    const verticalAlign = style['vertical-align'];
    if (verticalAlign === 'super') {
      wrapChildren(node, hast('sup'));
    }
    else if (verticalAlign === 'sub') {
      wrapChildren(node, hast('sub'));
    }

    // Some browsers paste with the `text-decoration` property and some use the
    // newer `text-decoration-line`, so we need to support both.
    const decorationLine = style['text-decoration'] || style['text-decoration-line'];
    if (decorationLine?.startsWith('line-through')) {
      wrapChildren(node, hast('del'));
    }

    // Google docs doesn't really have anything that represents "code", so infer
    // it from the use of monospace fonts.
    if (/,\s*monospace/.test(style['font-family'])) {
      wrapChildren(node, hast('code'));
    }

    // Keep the structure as flat as possible by removing semantically
    // meaningless elements once we've extracted formatting from them.
    if (node.tagName === 'span') {
      const parent = parents[parents.length - 1];
      const index = parent.children.indexOf(node);
      if (index === -1) {
        throw new Error('Could not find visited node in its parent');
      }

      const childrenCount = node.children.length;
      parent.children.splice(index, 1, ...node.children);
      return index + childrenCount;
    }
  });
}

/**
 * @private
 * Find consecutive inline elements of the same type and merge their contents.
 * For example, this would convert:
 *
 *     <code>const </code><code>name</code>
 *
 * To:
 *
 *     <code>const name</code>
 * @param {RehypeNode} node Fix the tree below this node
 */
function mergeConsecutiveInlineStyles (node) {
  visit(node, n => n.tagName && n.children?.length, (node, _index, _parent) => {
    const newChildren = [];
    let activeNode = null;
    for (const child of node.children) {
      if (activeNode) {
        if (child.tagName === activeNode.tagName) {
          activeNode.children.push(...child.children);
        }
        else {
          activeNode = null;
        }
      }
      if (!activeNode) {
        newChildren.push(child);
        if (child.tagName && !isBlock(child)) {
          activeNode = child;
        }
      }
    }
    node.children = newChildren;
  });
}

/**
 * Line breaks frequently wind up wrapped with a somewhat pointless `<span>`
 * element that makes them hard to deal correctly with. Unwrap those line breaks
 * so that they are bare `<br>` elements.
 *
 * Changes this:
 *     <span><br></span>
 * To:
 *     <br>
 * @param {RehypeNode} node Fix the tree below this node
 */
export function unwrapLineBreaks (node) {
  const children = node.children;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (
      child.tagName === 'span'
      && child.children.length === 1
      && child.children[0].tagName === 'br'
    ) {
      children.splice(i, 1, child.children[0]);
    }
    else if (child.children) {
      unwrapLineBreaks(child);
    }
  }
  node.children = children;
}

/**
 * Paragraphs and other block elements frequently wind up preceded with
 * pointless `<br>` elements. This is probably because paragraphs do not, by
 * default, have any space around them in a Google doc, even though having a
 * blank line is what causes Google Docs to spit out `<p>` elements instead of
 * just `<br>` elements.
 *
 * Changes this:
 *     <br><p>Blah</p>
 * To:
 *     <p>Blah</p>
 * @param {RehypeNode} node Fix the tree below this node
 */
export function removeLineBreaksBeforeBlocks (node) {
  const children = node.children;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.tagName === 'br' && isBlock(children[i + 1])) {
      children.splice(i, 1);
      i -= 1;
    }
    else if (child.children) {
      removeLineBreaksBeforeBlocks(child);
    }
  }
  node.children = children;
}

/**
 * Remove spaces from the start or end of nodes where it's not valid in Markdown
 * (e.g. `<em>`) and return the removed spaces. Works recursively to handle
 * nested nodes with surrounding spaces.
 * @param {RehypeNode} node
 * @returns {string}
 */
function _extractInvalidSpace (node, side = 'start') {
  let totalSpace = '';

  const reverse = side === 'start' ? false : true;
  visit(node, (child, index, parent) => {
    if (child.type === 'text') {
      const pattern = side === 'start' ? spaceAtStartPattern : spaceAtEndPattern;
      const spaceMatch = child.value.match(pattern);
      if (spaceMatch) {
        const space = spaceMatch[1];
        const body = side === 'start'
          ? child.value.slice(space.length)
          : child.value.slice(0, -space.length);
        totalSpace = side === 'start'
          ? (totalSpace + space)
          : (space + totalSpace);
        if (body.length) {
          child.value = body;
          return EXIT;
        }
        else {
          parent.children.splice(index, 1);
          return side === 'start' ? index : index - 1;
        }
      }
      else {
        return EXIT;
      }
    }
    else if (isSpaceSensitive(child)) {
      return CONTINUE;
    }
    else {
      return EXIT;
    }
  }, reverse);

  return totalSpace;
}

/**
 * In Google Docs (and HTML in general), an element that formats some text can
 * start with spaces, tabs, etc. However, in Markdown, some inline markup
 * (mainly emphasis marks like `**bold**` and `_italic_`) can't start or end
 * with spaces. This finds such elements and moves leading and trailing spaces
 * from inside to outside them.
 *
 * For example, this turns a tree like:
 *
 *     <p>Hello<em> italics </em></p>
 *
 * Into:
 *
 *     <p>Hello <em>italics</em> </p>
 *
 * @param {RehypeNode} node Fix the tree below this node
 */
export function moveSpaceOutsideSensitiveChildren (node) {
  visit(node, isSpaceSensitive, (node, index, parent) => {
    let nextIndex = index + 1;

    const startSpace = _extractInvalidSpace(node, 'start');
    if (startSpace) {
      parent.children.splice(index, 0, { type: 'text', value: startSpace });
      nextIndex++;
    }

    const endSpace = _extractInvalidSpace(node, 'end');
    if (endSpace) {
      parent.children.splice(nextIndex, 0, { type: 'text', value: endSpace });
      nextIndex++;
    }

    return nextIndex;
  });
}

/**
 * @param {RehypeNode} node
 * @returns {string|null}
 */
function getNodeTextAlignment (node) {
  const style = resolveNodeStyle(node);
  const alignMatch = style['text-align']?.match(/^(left|center|right)/);
  if (alignMatch) {
    return alignMatch[1];
  }
  return null;
}

/**
 * Tables in Google Docs don't actually put alignment info on the columns or
 * cells. Instead, cells have paragraphs that are aligned. This detects the
 * alignment of the content of table cells so that the Markdown conversion will
 * set the correct alignment for columns.
 * @param {RehypeNode} node Fix the tree below this node
 */
export function detectTableColumnAlignment(node) {
  visit(node, isCell, (node, _index, _parent) => {
    if (!node.properties.align) {
      let alignment = getNodeTextAlignment(node);
      if (!alignment && node.children) {
        for (let i = 0; i < node.children.length; i++) {
          const childAlignment = getNodeTextAlignment(node.children[i]);
          if (i === 0) {
            alignment = childAlignment;
          }
          else if (childAlignment !== alignment) {
            alignment = null;
            break;
          }
        }
      }

      if (alignment) {
        node.properties.align = alignment;
      }
    }
  });
}

/**
 * @private
 * Determine whether all the text nodes that are descendents of this node are
 * wrapped inside nodes represent `<code>` elements. Returns `null` if the
 * node has no text descendents, otherwise returns a boolean.
 * @param {RehypeNode} parent Check children of this node.
 * @returns {boolean|null}
 */
function isAllTextCode(parent) {
  if (!parent.children?.length) return null;

  let hasText = false;
  for (const child of parent.children) {
    if (child.tagName === 'code') {
      hasText = true;
      continue;
    }
    else if (child.type === 'text') {
      return false;
    }
    else {
      const childResult = isAllTextCode(child);
      if (childResult === false) {
        return false;
      }
      else if (childResult === true) {
        hasText = true;
      }
    }
  }

  return hasText ? true : null;
}

/**
 * Identify paragraphs where all the text is wrapped in `<code>` nodes and wrap
 * the entire pagraph in a `<pre><code>` node. Merge consecutive all-code
 * paragraphs into a single `<pre><code>` block.
 * @param {RehypeNode} node Fix the tree below this node
 */
export function createCodeBlocks(node) {
  if (!node.children?.length) return;

  // TODO: identify *lines* that are all code (not just block elements) by
  // splitting on `<br>` nodes, and break up parent blocks that have complete
  // code lines in them.

  const codeBlocks = [];
  let activeCodeBlock = null;
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (isBlock(child)) {
      if (isAllTextCode(child)) {
        if (!activeCodeBlock) {
          activeCodeBlock = { start: i, end: 0 };
          codeBlocks.push(activeCodeBlock);
        }
      }
      else {
        if (activeCodeBlock) {
          activeCodeBlock.end = i;
          activeCodeBlock = null;
        }
      }
    }
    else {
      createCodeBlocks(child);
    }
  }
  if (activeCodeBlock) {
    activeCodeBlock.end = node.children.length;
  }

  // Go in reverse order so we can use the indexes as is, without worrying about
  // how replacing each block changes the indexes of the next one.
  for (const block of codeBlocks.reverse()) {
    const length = block.end - block.start;
    const contents = node.children
      .slice(block.start, block.end)
      .flatMap(node =>
        // Unwrap paragraphs and replace them with their contents + a line break
        // so we don't wind up adding blank lines around each line of code.
        node.tagName === 'p'
          ? [...node.children, {type:'element', tagName: 'br'}]
          : [node]
      );
    node.children.splice(block.start, length, {
      type: 'element',
      tagName: 'pre',
      children: [{
        type: 'element',
        tagName: 'code',
        children: contents
      }]
    });
  }
}

const isChecklistItem = (node) => node.tagName === 'li' && node.properties?.role === 'checkbox';

/**
 * Insert actual `<input>` checkboxes at the start of items in checklists.
 *
 * Google Docs checklists use ARIA attributes to indicate that items are
 * checklist items, and in some browsers include an image (!) of a checkbox.
 * Neither of these cleanly translate to Markdown on their own.
 * @param {RehypeNode} node Fix the tree below this node
 */
function fixChecklists (node) {
  visit(node, isChecklistItem, (node, _index, _parent) => {
    // As of 2023-08-16, Chrome Canary starts checklist items with an inline,
    // b64-encoded image of an (un)checked checkbox. Remove it so we don't get
    // images in our Markdown output.
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (child.type === 'element') {
        if (
          child.tagName === 'img' &&
          child.properties?.ariaRoleDescription?.includes('checkbox')
        ) {
          node.children.splice(i, 1);
        }
        break;
      }
    }

    const checked = node.properties.ariaChecked?.toLowerCase() === 'true';
    // The checkbox must be in a <p> element.
    // See: https://github.com/syntax-tree/hast-util-to-mdast/issues/80
    node.children.splice(0, 0, {
      type: 'element',
      tagName: 'p',
      children: [{
        type: 'element',
        tagName: 'input',
        properties: { type: 'checkbox', checked }
      }]
    });
  });
}

/**
 * A rehype plugin to clean up the HTML of a Google Doc. .This applies to the
 * live HTML of Doc, as when you copy and paste it; not *exported* HTML (it
 * might apply there, too; I haven’t looked into it).
 */
export default function fixGoogleHtml () {
  return (tree, _file) => {
    unInlineStyles(tree);
    createCodeBlocks(tree);
    moveSpaceOutsideSensitiveChildren(tree);
    fixNestedLists(tree);
    detectTableColumnAlignment(tree);
    unwrapLineBreaks(tree);
    removeLineBreaksBeforeBlocks(tree);
    fixChecklists(tree);
    return tree;
  };
}
