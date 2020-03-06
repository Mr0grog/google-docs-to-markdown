const all = require('hast-util-to-mdast/lib/all');

/**
 * @typedef {{type: string, children: Array<UnistNode>}} UnistNode
 */

/**
 * @typedef {(node: UnistNode, type: string, props: any, children: Array<UnistNode>) => UnistNode} NodeBuilder
 */

/**
 * Convert a Rehype table cell node to an MDast table cell node, using HTML
 * nodes to represent multiline/block content inside the cell (since plain
 * Markdown can only support inline/phrasing content in cells).
 * 
 * This is basically a customization of:
 * https://github.com/syntax-tree/hast-util-to-mdast/blob/master/lib/handlers/table-cell.js
 * 
 * @param {NodeBuilder} h Creates a new mdast node
 * @param {UnistNode} node The original rehype node to convert
 */
export function convertTableCell (h, node) {
  let children = all(h, node);

  // If there is more than one child and any of them are multiline/block
  // objects, find a way to represent them (Markdown only support inline
  // content in table cells).
  // TODO: handle more than just paragraphs and line breaks? (lists, etc.)
  // TODO: technically block elements could be deeply nested, but this
  // implementation doesn't handle that. It's unlikely to occur in Google Docs.
  if (children.length > 1) {
    let newChildren = [];
    for (let i = 0, len = children.length; i < len; i++) {
      const child = children[i];
      if (child.type === 'break') {
        newChildren.push({type: 'html', value: '<br>'});
      }
      else if (child.type === 'paragraph') {
        // Instead of using `<p>` elements, keep the resulting markup as simple
        // as possible by just inserting `<br>` elements between paragraphs.
        if (i > 0) newChildren.push({type: 'html', value: '<br>'});
        newChildren.push(...child.children);
      }
      else {
        newChildren.push(child);
      }
    }
    children = newChildren;
  }

  return h(node, 'tableCell', children)
}

export default {
  td: convertTableCell,
  th: convertTableCell
};
