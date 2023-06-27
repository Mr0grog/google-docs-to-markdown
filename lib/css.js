/**
 * Light-Weight CSS Tooling
 *
 * The code here is meant to be a pretty light-weight and minimal approach to
 * CSS handling that meets the needs of the rest of the GDoc2Md library. It is
 * not meant to apply much validation or strictness to the CSS it handles, or
 * to handle particularly complex CSS content that we don't expect to see from
 * Google Docs.
 *
 * If our needs get drastically more complex in the future, we should switch to
 * using a dedicated third-party CSS parser like css-tree or postcss.
 */

/** @typedef {{[index: string]: string}} Style */

/**
 * Check whether a string is empty or only contains whitespace.
 * @param {string} text
 * @returns {boolean}
 */
function isBlank(text) {
  return /^\s*$/.test(text);
}

/**
 * Parse a CSS property list (e.g. from an HTML `style` attribute) into a simple
 * object where the keys are the property names and the values are the property
 * values (as strings).
 * This doesn't break out individual properties from shortcut properties,
 * normalize values, or do any specialized property/value handling.
 * @param {string} text
 * @returns {Style}
 */
export function parseCssPropertyList(text) {
  const properties = Object.create(null);
  if (!text) return properties;

  // This is pretty simplistic, and there are significant caveats:
  // - The semicolon could be inside a quoted string, in which case it shouldn't
  //   split properties.
  // - The property names and values are not limited to the actual allowed
  //   characters (the rules used here are much simpler than in real CSS).
  //
  // For the most part, this library doesn't need to be too concerned with
  // invalid input. We expect to be working with valid HTML & CSS that was
  // output by Google Docs. We haven't seen content that violates the above
  // caveats, so this is OK for now, but that could potentially change.
  for (const property of text.split(';')) {
    if (isBlank(property)) continue;

    try {
      const {name, value} = property
        .match(/^\s*(?<name>[\w\-]+)\s*:\s*(?<value>.+)\s*$/)
        .groups;
      properties[name] = value;
    } catch(error) {
      console.warn(`Could not parse CSS property "${property}" (${error})`);
    }
  }

  return properties;
}

/**
 *
 * @param {RehypeNode} node
 * @returns {Style}
 */
function getNodeStyle(node) {
  return node._style ||= parseCssPropertyList(node.properties?.style);
}

/**
 * @private
 * @param {string} propertyName
 * @param {RehypeNode} node
 * @returns {string|undefined}
 */
function getStyleProperty(propertyName, node) {
  const value = getNodeStyle(node)[propertyName];
  if (value && value !== 'inherit') {
    return value;
  }
}

/**
 * @private
 * @param {string} propertyName
 * @param {RehypeNode} node
 * @param {RehypeNode[]} parents List of ancestor nodes, ordered shallowest to
 *        deepest in the tree.
 * @returns {string|undefined}
 */
function getResolvedStyleProperty(propertyName, node, parents) {
  node._resolvedStyle ||= Object.create(null);
  if (propertyName in node._resolvedStyle) {
    return node._resolvedStyle[propertyName];
  }

  let value = getStyleProperty(propertyName, node);
  if (value || !parents) {
    node._resolvedStyle[propertyName] = value;
    return value;
  }

  // WARNING: Not all properties are inheritable, but this code doesn't check
  // for inheritability. If it turns out we need to do so, MDN has nice data
  // to build an allow/block-list from:
  // https://github.com/mdn/data/blob/main/css/properties.json
  for (let i = parents.length - 1; i >= 0; i--) {
    value = getStyleProperty(propertyName, parents[i]);
    if (value) {
      node._resolvedStyle[propertyName] = value;
      return value;
    }
  }

  return undefined;
}

export class StyleResolver {
  constructor (node, parents) {
    this.node = node;
    this.parents = parents;
  }

  get (propertyName) {
    return getResolvedStyleProperty(propertyName, this.node, this.parents);
  }
}
