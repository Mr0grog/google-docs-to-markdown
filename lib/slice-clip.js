/**
 * Tools for working with Google Docs Slice Clips (GDocs's internal pasteboard
 * format).
 */

import { CONTINUE, EXIT, visit } from 'unist-util-visit';

/**
 * @typedef {object} GDocsRange
 * @property {number} start
 * @property {number} length
 */

const isText = (node) => node.type === 'text';

function getStyles(sliceClip, styleType) {
  return sliceClip.resolved.dsl_styleslices.find(
    (slice) => slice.stsl_type === styleType
  ).stsl_styles;
}

/**
 * Get the plain text of the slice clip.
 * @param {any} sliceClip
 * @returns {string}
 */
export function sliceClipText(sliceClip) {
  return sliceClip.resolved.dsl_spacers;
}

/**
 * Create a set of range objects to represent the location of suggested changes
 * in the text based on data from a Slice Clip object.
 *
 * In the slice clip, ranges are represented by a large array, where each index
 * indicates a location in the text. If the value is an array, it will be an
 * array of suggestion IDs for suggestions that start (or continue) at that
 * location in the text. If a currently open suggestion is not listed in the
 * value, the location marks the end of that suggestion.
 *
 * For exampled, suggestion 'a' starts at index 2 and ends at 7; 'b' starts at
 * index 2 and ends at 5:
 *
 *   [[], null, ['a', 'b'], null, null, ['a'], null, []]
 *
 * @param {any} sliceClip
 * @param {"insertion"|"deletion"} type
 * @returns {GDocsRange[]}
 */
export function rangesForSuggestions(sliceClip, type) {
  const text = sliceClip.resolved.dsl_spacers;
  const locations = sliceClip.resolved[`dsl_suggested${type}s`].sgsl_sugg;

  const ranges = [];
  let openRanges = [];
  for (let i = 0; i < locations.length; i++) {
    let value = locations[i];
    if (value != null) {
      for (const range of openRanges) {
        range.length = i - range.start;
      }
      openRanges = [];

      for (const suggestionId of value) {
        const range = { suggestionId, type, start: i, length: 0 };
        ranges.push(range);
        openRanges.push(range);
      }
    }
  }

  for (const range of openRanges) {
    range.length = text.length - range.start;
  }

  return ranges;
}

/**
 * @typedef {object} HeadingInfo
 * @property {number} start
 * @property {number} end
 * @property {string} text
 * @property {number} level
 * @property {string} id
 */

/**
 * Get information about all the headings in the slice clip.
 * @param {any} sliceClip
 * @returns {HeadingInfo[]}
 */
export function getHeadings(sliceClip) {
  const headings = [];
  const paragraphStyles = getStyles(sliceClip, 'paragraph');

  // Paragraph styles have objects at the index of the paragraph's *end*.
  // It appears all text is expected to be in a paragraph, so the end of one
  // implicitly begins another.
  let current = { start: 0 };
  for (let i = 0; i < paragraphStyles.length; i++) {
    const style = paragraphStyles[i];
    if (style == null) continue;

    // Titles have `ps_hd = 100`, so confine ouselves to normal heading levels.
    if (style.ps_hdid && style.ps_hd < 7) {
      const text = sliceClipText(sliceClip).slice(current.start, i);
      headings.push({
        ...current,
        end: i,
        text,
        level: style.ps_hd,
        id: style.ps_hdid,
      });
    }

    // The next character after a paragraph is a line break; skip it.
    current = { start: i + 1 };
  }

  return headings;
}

/**
 * Get the IDs and locations of all the bookmarks in a slice clip.
 * @param {any} sliceClip
 * @returns {{ ids: Set<string>, ranges: GDocsRange[] }}
 */
export function getBookmarks(sliceClip) {
  const ids = new Set();
  const ranges = [];
  const positionMap = sliceClip?.resolved?.dsl_entitypositionmap?.bookmark;

  if (positionMap) {
    for (let i = 0; i < positionMap.length; i++) {
      if (positionMap[i] != null) {
        for (const id of positionMap[i]) {
          ids.add(id);
          ranges.push({ bookmark: id, start: i, length: 0 });
        }
      }
    }
  }

  return { ids, ranges };
}

/**
 * Visit each range of text as found in a HAST tree. You can replace or change
 * the node from within the visitor and it should continue to work.
 *
 * WARNING: the overall *text content* of the tree must remain the same,
 * otherwise work will stop early because the tree can no longer be matched
 * up to the appropriate locations in the document. If you need to modify the
 * text itself, wrap the text in a new node, and then visit those nodes in a
 * second pass to update their text children.
 *
 * @param {string} docsText
 * @param {GDocsRange[]} ranges
 * @param {RehypeNode} tree
 * @param {function} visitor
 */
export function visitRangesInTree(docsText, ranges, tree, visitor) {
  if (ranges.length === 0) return;

  ranges = ranges.slice().sort((a, b) => a.start - b.start);

  // Line breaks and various space characters may be represented by elements
  // in the HAST tree instead of being literally present as text. However,
  // Non-space characters should always be preserved in HAST text nodes.
  //
  // Keep track of the location of the next non-space character so we can match
  // the HAST tree against that rather than the literal text of the GDoc.
  let currentIndex = 0;
  let currentNonspaceIndex =
    currentIndex + docsText.slice(currentIndex).match(/^\s*/)[0].length;

  visit(tree, isText, (node, nodeIndex, parent) => {
    const leadingSpaces = node.value.match(/^\s*/)[0];
    const text = node.value.slice(leadingSpaces.length);

    const endIndex = currentNonspaceIndex + text.length;
    const expectedText = docsText.slice(currentNonspaceIndex, endIndex);

    if (expectedText !== text) {
      console.warn(
        `visitRangesInTree: stopping because node text did not match slice clip text!
        Range: ${currentIndex}...${endIndex}
        Text: "${node.value}"
        Expected: "${docsText.slice(currentIndex, endIndex)}"`
      );
      return EXIT;
    }

    if (ranges[0] && ranges[0].start < endIndex) {
      let range = ranges.shift();
      let startInText = range.start - currentNonspaceIndex;
      const rangeStart = Math.max(leadingSpaces.length + startInText, 0);
      let rangeEnd = leadingSpaces.length + startInText + range.length;

      // If the range extends into another node chop it up and put the
      // remainder back on the list of ranges to handle.
      const overreach = range.start + range.length - endIndex;
      if (overreach > 0) {
        rangeEnd = endIndex;

        const remainder = { ...range, start: endIndex, length: overreach };
        const point = ranges.findIndex((r) => r.start >= remainder.start);
        if (point < 0) {
          ranges.push(remainder);
        } else {
          ranges.splice(point, 0, remainder);
        }
      }

      visitor({ node, nodeIndex, parent, range, rangeStart, rangeEnd });

      if (ranges.length === 0) {
        return EXIT;
      } else {
        // The next range could also be in this node, so re-visit it.
        return [CONTINUE, nodeIndex];
      }
    } else {
      currentIndex = endIndex;
      currentNonspaceIndex =
        currentIndex + docsText.slice(currentIndex).match(/^\s*/)[0].length;
    }
  });
}

/**
 * Replace each range of text (from the original Google Doc) in a HAST tree
 * with a new node.
 *
 * WARNING: the overall *text content* of the tree must remain the same,
 * otherwise work will stop early because the tree can no longer be matched
 * up to the appropriate locations in the document. If you need to modify the
 * text itself, wrap the text in a new node, and then visit those nodes in a
 * second pass to update their text children.
 *
 * @param {string} docsText
 * @param {GDocsRange[]} ranges
 * @param {RehypeNode} tree
 * @param {(GDocsRange, string) => RehypeNode?} replacer
 */
export function replaceRangesInTree(docsText, ranges, node, replacer) {
  visitRangesInTree(
    docsText,
    ranges,
    node,
    ({ node, nodeIndex, parent, range, rangeStart, rangeEnd }) => {
      const textBefore = node.value.slice(0, rangeStart);
      const textInside = node.value.slice(rangeStart, rangeEnd);
      const textAfter = node.value.slice(rangeEnd);

      const newNodes = [];
      if (textBefore.length) {
        newNodes.push({ type: 'text', value: textBefore });
      }

      const replacement = replacer(range, textInside);
      if (replacement) {
        newNodes.push(replacement);
      }

      if (textAfter.length) {
        newNodes.push({ type: 'text', value: textAfter });
      }

      parent.children.splice(nodeIndex, 1, ...newNodes);
    }
  );
}
