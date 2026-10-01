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

/**
 * Transform a range in a HAST tree into a code block. This replaces the nodes
 * with nodes that represent markup like `<pre><code>content</code></pre>` to
 * represent a code block. Any `<p>` nodes in the content are removed and
 * replaced with their content followed by a new `<br>` node.
 * @param {{ node: HastNodes, start: number, end: number }} range
 * @param {string} [language]
 */
export function wrapInCodeBlock(range, language = null) {
  const languageClasses = language ? [`language-${language}`] : [];

  const contents = range.node.children
    .slice(range.start, range.end)
    .flatMap((node) =>
      // Unwrap paragraphs and replace them with their contents + a line break
      // so we don't wind up adding blank lines around each line of code.
      node.tagName === 'p'
        ? [...node.children, { type: 'element', tagName: 'br' }]
        : [node]
    );

  const length = range.end - range.start;
  range.node.children.splice(range.start, length, {
    type: 'element',
    tagName: 'pre',
    properties: {},
    children: [
      {
        type: 'element',
        tagName: 'code',
        properties: {
          className: languageClasses,
          dataLanguage: language || '',
        },
        children: contents,
      },
    ],
  });
}
