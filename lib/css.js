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
 * Value strings are lower-cased for easier handling (since most CSS values are
 * case insensitive), but this doesn't break out individual properties from
 * shorthand properties or do other specialized property/value handling.
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
        .match(/^\s*(?<name>[\w-]+)\s*:\s*(?<value>.+)\s*$/)
        .groups;
      // Lower-case values for easier lookups and comparisons. Technically this
      // should only happen for parts of the value that are not quoted.
      properties[name] = value.toLowerCase();
    }
    catch(error) {
      console.warn(`Could not parse CSS property "${property}" (${error})`);
    }
  }

  return properties;
}

/**
 * Get the content of the node's `style` attribute as a parsed object. This
 * caches the results on the node for easy retrieval.
 * @param {RehypeNode} node
 * @returns {Style}
 */
function getNodeStyle(node) {
  return node._style ||= parseCssPropertyList(node.properties?.style);
}

/**
 * Resolve the actual, inherited value of a single style property based on the
 * whole tree of nodes. This caches results on the node for easy retrieval.
 * @param {string} propertyName
 * @param {RehypeNode} node
 * @param {RehypeNode[]} ancestors List of ancestor nodes, ordered shallowest to
 *        deepest in the tree.
 * @returns {string|undefined}
 */
function getResolvedStyleProperty(propertyName, node, ancestors) {
  node._resolvedStyle ||= Object.create(null);
  if (propertyName in node._resolvedStyle) {
    return node._resolvedStyle[propertyName];
  }

  let value = getNodeStyle(node)[propertyName];
  if ((value && value !== 'inherit') || !ancestors?.length) {
    node._resolvedStyle[propertyName] = value;
    return value;
  }

  // WARNING: Not all properties are inheritable, but this code doesn't check
  // for inheritability. If it turns out we need to do so, MDN has nice data
  // to build an allow/block-list from:
  // https://github.com/mdn/data/blob/main/css/properties.json
  const parentAncestors = ancestors.slice(0, -1);
  const parent = ancestors[parentAncestors.length];
  return getResolvedStyleProperty(propertyName, parent, parentAncestors);
}

/**
 * Get an object with properties representing a node's fully resolved styles,
 * including anything inherited from ancestors.
 * @param {RehypeNode} node
 * @param {RehypeNode[]} ancestors Ancestors of `node`, starting with the tree
 *        root and ending with the parent of `node`.
 * @returns {Style}
 */
export function resolveNodeStyle(node, ancestors) {
  return new Proxy(Object.create(null), {
    get (target, property, _receiver) {
      if (!(property in target)) {
        target[property] = getResolvedStyleProperty(property, node, ancestors);
      }
      return target[property];
    }
  });
}
