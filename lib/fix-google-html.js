'use strict';

import hast from 'hastscript';
import visit from 'unist-util-visit';

const isList = node => node.tagName === 'ul' || node.tagName === 'ol';
const isStyled = node => node.type === 'element' && node.properties.style;

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
 * Google Docs does italics/bolds/etc on <span>s with style attributes, but
 * rehype-remark does pick up on those well. Instead, transform them into
 * `em`, `strong`, etc. elements.
 * 
 * @param {RehypeNode} node Fix the tree below this node
 */
export function unInlineStyles (node) {
  visit(node, isStyled, (node, index, parent) => {
    const style = node.properties.style;
    if (/font-style:\s*italic/.test(style)) {
      wrapChildren(node, hast('em'));
    }
    if (/font-weight:\s*(bold|700)/.test(style)) {
      wrapChildren(node, hast('strong'));
    }
  });
}

/**
 * A rehype plugin to clean up the HTML of a Google Doc. .This applies to the
 * live HTML of Doc, as when you copy and paste it; not *exported* HTML (it
 * might apply there, too; I haven’t looked into it).
 */
export default function fixGoogleHtml () {
  return (tree, file) => {
    unInlineStyles(tree);
    fixNestedLists(tree);
    return tree;
  };
}
