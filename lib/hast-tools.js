/**
 * General tooling for working with HAST.
 */

/** @typedef {import("hast").Nodes} HastNodes */

/**
 * Get the complete text content of a HAST node.
 * @param {HastNodes} node
 * @returns {string}
 */
export function getHastTextContent(node) {
  if (node.type === 'text') {
    return node.value;
  } else if (node.children) {
    return node.children.map(getHastTextContent).join('');
  } else {
    return '';
  }
}

/**
 * Wrap the children of `node` with the `wrapper` node.
 * @param {HastNodes} node
 * @param {HastNodes} wrapper
 * @returns {HastNodes}
 */
export function wrapChildren(node, wrapper) {
  wrapper.children = node.children;
  node.children = [wrapper];
  return wrapper;
}
