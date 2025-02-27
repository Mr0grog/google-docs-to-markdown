'use strict';

import { h as hast } from 'hastscript';
import { CONTINUE, EXIT, visit } from 'unist-util-visit';
import { visitParents } from 'unist-util-visit-parents';
import { resolveNodeStyle } from './css.js';
import { wrapChildren, wrapInCodeBlock } from './hast-tools.js';
import {
  sliceClipText,
  rangesForSuggestions,
  getBookmarks,
  getHeadings,
  replaceRangesInTree,
  rangesForCodeSnippets,
  visitRangesInTree,
} from './slice-clip.js';

/** @typedef {import("hast").Nodes} HastNodes */
/** @typedef {import("unified").Transformer} UnifiedTransformer */

const blockElements = new Set([
  'address',
  'article',
  'aside',
  'blockquote',
  'caption',
  'center', // historic
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir', // historic
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'frameset', // historic
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
  'isindex', // historic
  'li',
  'main',
  'menu',
  'nav',
  'noframes', // historic
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
  'ul',
]);

const voidElements = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);

// These elements convert to Markdown nodes that can't start or end with spaces.
// For example, you can't start emphasis with a space: `This * is emphasized*`.
const spaceSensitiveElements = new Set(['em', 'strong', 'ins', 'del']);

const isList = (node) => node.tagName === 'ul' || node.tagName === 'ol';
const isStyled = (node) => node.type === 'element' && node.properties?.style;
const isBlock = (node) => node && blockElements.has(node.tagName);
const isVoid = (node) => node && voidElements.has(node.tagName);
const isSpaceSensitive = (node) =>
  node && spaceSensitiveElements.has(node.tagName);
const isCell = (node) => node.tagName === 'th' || node.tagName === 'td';
const isAnchor = (node) => node.tagName === 'a';
const isSuggestion = (n) => n.properties?.dataSuggestionId != null;

const spaceAtStartPattern = /^(\s+)/;
const spaceAtEndPattern = /(\s+)$/;

/**
 * Fix the incorrect formatting of nested lists in Google Docs's HTML. Lists
 * can only have `div` and `li` children, but Google Docs has other lists as
 * direct descendents. This moves those free-floating lists into the previous
 * `li` element under the assumption that they represent subitems of it.
 *
 * @param {HastNodes} node Fix the tree below this node
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
export function fixNestedLists(node) {
  visit(node, isList, (node, index, parent) => {
    if (isList(parent)) {
      const previous = parent.children[index - 1];
      if (previous && previous.tagName === 'li') {
        previous.children.push(node);
        parent.children.splice(index, 1);
        return index;
      } else {
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
 * @param {HastNodes} node Fix the tree below this node
 */
export function unInlineStyles(node) {
  convertInlineStylesToElements(node);
  mergeConsecutiveInlineStyles(node);
}

/**
 * @private
 * Convert CSS in style attribtutes to semantic elements that are more readily
 * converted to Markdown.
 * @param {HastNodes} node Fix the tree below this node
 */
function convertInlineStylesToElements(node) {
  visitParents(
    node,
    (n) => isStyled(n) && !isBlock(n),
    (node, parents) => {
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
      } else if (verticalAlign === 'sub') {
        wrapChildren(node, hast('sub'));
      }

      // Some browsers paste with the `text-decoration` property and some use
      // the newer `text-decoration-line`, so we need to support both.
      const decorationLine =
        style['text-decoration'] || style['text-decoration-line'];
      if (decorationLine?.startsWith('line-through')) {
        wrapChildren(node, hast('del'));
      }

      // Google docs doesn't really have anything that represents "code", so
      // infer it from the use of monospace fonts.
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
    }
  );
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
 * @param {HastNodes} node Fix the tree below this node
 */
function mergeConsecutiveInlineStyles(node) {
  visit(
    node,
    (n) => n.tagName && n.children?.length,
    (node, _index, _parent) => {
      const newChildren = [];
      let activeNode = null;
      for (const child of node.children) {
        if (activeNode) {
          if (child.tagName === activeNode.tagName) {
            activeNode.children.push(...child.children);
          } else {
            activeNode = null;
          }
        }
        if (!activeNode) {
          newChildren.push(child);
          if (child.tagName && !isBlock(child) && !isVoid(child)) {
            activeNode = child;
          }
        }
      }
      node.children = newChildren;
    }
  );
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
 * @param {HastNodes} node Fix the tree below this node
 */
export function unwrapLineBreaks(node) {
  const children = node.children;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (
      child.tagName === 'span' &&
      child.children.length === 1 &&
      child.children[0].tagName === 'br'
    ) {
      children.splice(i, 1, child.children[0]);
    } else if (child.children) {
      unwrapLineBreaks(child);
    }
  }
  node.children = children;
}

/**
 * Moves linebreaks outside of anchor elements,
 * if the linebreak is the first and/or last child of the anchor.
 * @param {HastNodes} node
 */
export function moveLinebreaksOutsideOfAnchors(node) {
  visit(node, isAnchor, (node, index, parent) => {
    const children = node.children;
    if (children[children.length - 1]?.tagName === 'br') {
      const endingBr = children.pop();
      parent.children.splice(index + 1, 0, endingBr);
    }
    if (children[0]?.tagName === 'br') {
      const beginningBr = children.shift();
      parent.children.splice(index, 0, beginningBr);
    }
  });
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
 * @param {HastNodes} node Fix the tree below this node
 */
export function removeLineBreaksBeforeBlocks(node) {
  const children = node.children;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.tagName === 'br' && isBlock(children[i + 1])) {
      children.splice(i, 1);
      i -= 1;
    } else if (child.children) {
      removeLineBreaksBeforeBlocks(child);
    }
  }
  node.children = children;
}

/**
 * Remove spaces from the start or end of nodes where it's not valid in Markdown
 * (e.g. `<em>`) and return the removed spaces. Works recursively to handle
 * nested nodes with surrounding spaces.
 * @param {HastNodes} node
 * @returns {string}
 */
function _extractInvalidSpace(node, side = 'start') {
  let totalSpace = '';

  const reverse = side === 'start' ? false : true;
  visit(
    node,
    (child, index, parent) => {
      if (child.type === 'text') {
        const pattern =
          side === 'start' ? spaceAtStartPattern : spaceAtEndPattern;
        const spaceMatch = child.value.match(pattern);
        if (spaceMatch) {
          const space = spaceMatch[1];
          const body =
            side === 'start'
              ? child.value.slice(space.length)
              : child.value.slice(0, -space.length);
          totalSpace =
            side === 'start' ? totalSpace + space : space + totalSpace;
          if (body.length) {
            child.value = body;
            return EXIT;
          } else {
            parent.children.splice(index, 1);
            return side === 'start' ? index : index - 1;
          }
        } else {
          return EXIT;
        }
      } else if (isSpaceSensitive(child)) {
        return CONTINUE;
      } else {
        return EXIT;
      }
    },
    reverse
  );

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
 * @param {HastNodes} node Fix the tree below this node
 */
export function moveSpaceOutsideSensitiveChildren(node) {
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
 * @param {HastNodes} node
 * @returns {string|null}
 */
function getNodeTextAlignment(node) {
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
 * @param {HastNodes} node Fix the tree below this node
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
          } else if (childAlignment !== alignment) {
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
 * @param {HastNodes} parent Check children of this node.
 * @returns {boolean|null}
 */
function isAllTextCode(parent) {
  if (!parent.children?.length) return null;

  let hasText = false;
  for (const child of parent.children) {
    if (child.tagName === 'code') {
      hasText = true;
      continue;
    } else if (child.type === 'text') {
      return false;
    } else {
      const childResult = isAllTextCode(child);
      if (childResult === false) {
        return false;
      } else if (childResult === true) {
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
 * @param {HastNodes} node Fix the tree below this node
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
    // Don't rewrite already-existing code block markup.
    if (child?.tagName === 'code' || child?.tagName === 'pre') continue;

    if (isBlock(child)) {
      if (isAllTextCode(child)) {
        if (!activeCodeBlock) {
          activeCodeBlock = { node, start: i, end: 0 };
          codeBlocks.push(activeCodeBlock);
        }
      } else {
        if (activeCodeBlock) {
          activeCodeBlock.end = i;
          activeCodeBlock = null;
        }
      }
    } else {
      createCodeBlocks(child);
    }
  }
  if (activeCodeBlock) {
    activeCodeBlock.end = node.children.length;
  }

  // Go in reverse order so we can use the indexes as is, without worrying about
  // how replacing each block changes the indexes of the next one.
  for (const block of codeBlocks.reverse()) {
    wrapInCodeBlock(block);
  }
}

const isChecklistItem = (node) =>
  node.tagName === 'li' && node.properties?.role === 'checkbox';

/**
 * Insert actual `<input>` checkboxes at the start of items in checklists.
 *
 * Google Docs checklists use ARIA attributes to indicate that items are
 * checklist items, and in some browsers include an image (!) of a checkbox.
 * Neither of these cleanly translate to Markdown on their own.
 * @param {HastNodes} node Fix the tree below this node
 */
function fixChecklists(node) {
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
      children: [
        {
          type: 'element',
          tagName: 'input',
          properties: { type: 'checkbox', checked },
        },
      ],
    });
  });
}

/**
 * Create IDs for headings, and update internal links to use those IDs.
 * @param {HastNodes} node
 * @param {any} sliceClip
 */
function fixInternalLinks(node, sliceClip) {
  if (!sliceClip) return;

  const sliceClipHeadings = getHeadings(sliceClip).filter((h) => h.text);
  if (!sliceClipHeadings.length) return;

  const headings = [];
  visit(
    node,
    (n) => n.tagName?.match(/^h\d$/),
    (node, _index, _parent) => {
      headings.push(node);
    }
  );

  // check if the headings in the tree match the internal headings
  if (
    !headings.every(
      (heading, index) =>
        heading.tagName.toLowerCase() === `h${sliceClipHeadings[index]?.level}`
    )
  ) {
    console.warn(
      'Headings in slice clip data do not match headings in document; intra-document links will be broken.'
    );
    return;
  }

  const headingIds = new Set();

  // Add heading IDs to DOM nodes.
  headings.forEach((heading, index) => {
    const internalHeading = sliceClipHeadings[index];
    heading.properties.id = internalHeading.id;
    headingIds.add(internalHeading.id);
  });

  // Update any links to the headings to be internal links.
  visit(node, isAnchor, (node, _index, _parent) => {
    let url;
    try {
      url = new URL(node.properties.href);
    } catch (_error) {
      return;
    }

    if (url.host === 'docs.google.com') {
      const internalHeadingId = url.hash.match(/^#heading=([a-z0-9.]+)$/)?.[1];
      if (headingIds.has(internalHeadingId)) {
        node.properties.href = `#${internalHeadingId}`;
      }
    }
  });
}

/**
 * Find suggested changes in the text and mark them with appropriate DOM nodes.
 * Copying from Google Docs includes the suggestions in the text with no markup,
 * so you can't tell what's been suggested for removal or insertion. However,
 * the Slice Clip data includes the location of the suggestions.
 * @param {HastNodes} node
 * @param {any} sliceClip
 */
function markSuggestions(node, sliceClip) {
  if (!sliceClip) return;

  const ranges = [
    ...rangesForSuggestions(sliceClip, 'insertion'),
    ...rangesForSuggestions(sliceClip, 'deletion'),
  ];

  replaceRangesInTree(sliceClipText(sliceClip), ranges, node, (range, text) => {
    return {
      type: 'element',
      tagName: range.type === 'insertion' ? 'ins' : 'del',
      properties: { dataSuggestionId: range.suggestionId },
      children: [{ type: 'text', value: text }],
    };
  });
}

/**
 * Update suggested changes in the tree so that they render as if they were
 * accepted or rejected according to the passed in options.
 * @param {HastNodes} tree
 * @param {{ suggestions: string }} options
 */
function formatSuggestions(tree, options) {
  if (!['accept', 'reject'].includes(options.suggestions)) return;

  visit(tree, isSuggestion, (node, index, parent) => {
    if (
      (options.suggestions === 'accept' && node.tagName === 'ins') ||
      (options.suggestions === 'reject' && node.tagName === 'del')
    ) {
      parent.children.splice(index, 1, ...node.children);
    } else {
      parent.children.splice(index, 1);
    }
    return [CONTINUE, index];
  });
}

/**
 * Find bookmarks that are the targets for intra-document links and place them
 * in the tree. Bookmarks are missing from the copied HTML, but are present in
 * the slice clip data.
 * @param {HastNodes} tree
 * @param {any} sliceClip
 */
function placeBookmarks(tree, sliceClip) {
  const { ids, ranges } = getBookmarks(sliceClip);
  if (ranges.length === 0) return;

  // Insert anchors where the bookmarks should be.
  replaceRangesInTree(sliceClipText(sliceClip), ranges, tree, (range) => {
    return {
      type: 'element',
      tagName: 'a',
      properties: { name: range.bookmark },
      children: [],
    };
  });

  // Update the links to point to the new anchors.
  visit(tree, isAnchor, (node, _index, _parent) => {
    let url;
    try {
      url = new URL(node.properties.href);
    } catch (_error) {
      return;
    }

    if (url.host === 'docs.google.com') {
      const id = url.hash.match(/^#bookmark=([a-z0-9.]+)$/)?.[1];
      if (ids.has(id)) {
        node.properties.href = `#${id}`;
      }
    }
  });
}

/**
 * Find sections of text that belong to code snippet objects in a Google Doc
 * (only available on business and enterprise plans) using the slice clip data.
 * Each line of the block will be a `<p>` element, so this unwraps the content
 * from the `<p>` elements, inserts `<br>` line breaks, and wraps them back up
 * together in `<pre><code>content here</code></pre>`.
 *
 * We also do a similar operation for things that are code-block-like (e.g.
 * consecutive lines on monospaced text) separately in `createCodeBlocks`, but
 * using the actual code snippet objects from the slice clip gives us more info
 * when possible. It also lets us identify code blocks that we couldn't with
 * more general heuristics.
 *
 * @param {HastNodes} tree
 * @param {any} sliceClip
 */
function fixCodeSnippetObjects(tree, sliceClip) {
  if (!sliceClip) return;

  const textRanges = rangesForCodeSnippets(sliceClip);

  // Convert the text ranges to ranges covering the lines (`<p>` elements) in
  // HAST so we know what nodes to combine into a `<code>` element.
  const docsText = sliceClipText(sliceClip);
  const treeRanges = [];
  let activeRange = null;
  visitRangesInTree(docsText, textRanges, tree, ({ parents, range }) => {
    let paragraphParent = null;
    let paragraphIndex = 0;
    for (let i = parents.length - 1; i > 0; i--) {
      if (parents[i].tagName === 'p') {
        paragraphParent = parents[i - 1];
        paragraphIndex = paragraphParent.children.indexOf(parents[i]);
        break;
      }
    }
    if (!paragraphParent) {
      console.error(
        `fixCodeBlockObjects: Part of code block ${range.codeBlock.id} was not in a paragraph! Cannot recreate code block in documement.`
      );
      return;
    }

    if (activeRange && activeRange.codeBlock.id === range.codeBlock.id) {
      if (activeRange.node !== paragraphParent) {
        console.error(
          `fixCodeBlockObjects: No common root element for code block ${range.codeBlock.id}! Cannot recreate code block in document.`
        );
        treeRanges.pop();
        activeRange = null;
        return;
      }
      activeRange.end = paragraphIndex + 1;
    } else {
      activeRange = {
        node: paragraphParent,
        start: paragraphIndex,
        end: paragraphIndex + 1,
        codeBlock: range.codeBlock,
      };
      treeRanges.push(activeRange);
    }
  });

  // Actually replace the paragraphs with code block nodes.
  // Go in reverse order so we can use the indexes as is, without worrying about
  // how replacing each block changes the indexes of the next one.
  for (const treeRange of treeRanges.reverse()) {
    wrapInCodeBlock(treeRange, treeRange.codeBlock.language);
  }
}

/**
 * Raw HTML directly from what Google Docs puts on the pasteboard can have some
 * spurious stuff (some depends on what browser you use, some does not). This
 * removes or otherwise cleans it up.
 * @param {HastNodes} tree
 */
function unwrapClipboardHtmlEnvelope(tree) {
  if (tree.tagName === 'b') {
    tree.tagName = 'div';
  }

  for (let i = 0; i < tree.children.length; i++) {
    const child = tree.children[i];
    if (child.tagName === 'meta') {
      tree.children.splice(i, 1);
      i--;
    } else if (child.tagName === 'b' && child.children.some(isBlock)) {
      tree.children.splice(i, 1, ...child.children);
      i += child.children.length - 1;
    }
  }
}

/**
 * Remove fragment markers that browsers add to clipboard content.
 * @param {HastNodes} node Fix the tree below this node
 */
function removeFragmentMarkers(node) {
  visit(
    node,
    (node) =>
      node.type === 'comment' &&
      (node.value === 'StartFragment' || node.value === 'EndFragment'),
    (_node, index, parent) => {
      parent.children.splice(index, 1);
      return index;
    }
  );
}

function replaceTableOfContents(node) {
  let inTOC = false;
  let tocStartIndex = -1;
  let tocLength = 0;
  
  // First pass: Identify TOC section (consecutive heading links)
  node.children?.forEach((child, index) => {
    if (child.type === 'element' && child.tagName === 'p' &&
        child.children?.length === 1 && child.children[0].tagName === 'a' &&
        child.children[0].properties?.href?.startsWith('#')) {
      if (!inTOC) {
        inTOC = true;
        tocStartIndex = index;
      }
      tocLength++;
    } else if (inTOC) {
      inTOC = false;
    }
  });

  // Second pass: Replace if we found a TOC section
  if (tocStartIndex !== -1 && tocLength > 0) {
    node.children.splice(tocStartIndex, tocLength, {
      type: 'element',
      tagName: 'p',
      children: [{
        type: 'text',
        value: '[TOC]'
      }]
    });
  }
}

/**
 * A Unified plugin that adds metadata from a Google Docs "Slice Clip" object
 * into the HTML/HAST tree of a pasted Google Doc.
 *
 * Google Docs's HTML format doesn't include a lot of detailed data that is in
 * the Slice Clip data (e.g. heading IDs and bookmarks for intra-document links)
 * so this modifies the HAST tree to carry that data in an HTML-centric way.
 * @returns {UnifiedTransformer}
 */
export function updateHtmlWithSliceClip() {
  return (tree, file) => {
    unwrapClipboardHtmlEnvelope(tree);
    markSuggestions(tree, file.data.sliceClip);
    fixInternalLinks(tree, file.data.sliceClip);
    placeBookmarks(tree, file.data.sliceClip);
    fixCodeSnippetObjects(tree, file.data.sliceClip);

    return tree;
  };
}

/**
 * A Unified plugin that cleans up the HTML of a Google Doc so that it can be
 * handled effectively by Rehype-Remark. This is meant for the copy/pasted HTML
 * of a Doc, not *exported* HTML (the expect format needs more handling).
 * @returns {UnifiedTransformer}
 */
export function cleanGoogleHtml() {
  return (tree, file) => {
    formatSuggestions(tree, file.data.options);
    unInlineStyles(tree);
    createCodeBlocks(tree);
    moveSpaceOutsideSensitiveChildren(tree);
    fixNestedLists(tree);
    detectTableColumnAlignment(tree);
    unwrapLineBreaks(tree);
    moveLinebreaksOutsideOfAnchors(tree);
    removeLineBreaksBeforeBlocks(tree);
    fixChecklists(tree);
    removeFragmentMarkers(tree);
    if (file.data.options?.tableOfContentsStyle === 'replace') {
      replaceTableOfContents(tree);
    }
    return tree;
  };
}
