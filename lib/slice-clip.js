/**
 * Tools for working with Google Docs Slice Clips (GDocs's internal pasteboard
 * format).
 */

import { CONTINUE, EXIT, visitParents } from 'unist-util-visit-parents';

/**
 * @typedef {object} GDocsRange
 * @property {number} start
 * @property {number} end
 */

const isText = (node) => node.type === 'text';

export function getStyles(sliceClip, styleType) {
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
        range.end = i;
      }
      openRanges = [];

      for (const suggestionId of value) {
        const range = { suggestionId, type, start: i, end: i };
        ranges.push(range);
        openRanges.push(range);
      }
    }
  }

  for (const range of openRanges) {
    range.end = text.length;
  }

  return ranges;
}

/**
 * Create a set of range objects representing the location of code block
 * objects in the text based on the slice clip data.
 *
 * Ranges have an extra `codeBlock` object with an `id`, `language`, and `text`.
 *
 * In the slice clip, code blocks are stored as `code_snippet` style slices.
 * The objects in the slice are at the index of the start of the block. In the
 * raw text, the start of a block is identified by a `\uec03` and the end by a
 * `\uec02` character.
 *
 * @param {any} sliceClip
 * @returns {GDocsRange[]}
 */
export function rangesForCodeBlocks(sliceClip) {
  const ranges = [];
  const codeStyles = getStyles(sliceClip, 'code_snippet');
  if (!codeStyles.length) return ranges;

  const docsText = sliceClipText(sliceClip);
  let codeBlockId = 0;
  let match;
  const matcher = /\uec03([^\uec02]*)\uec02/g;
  while ((match = matcher.exec(docsText))) {
    // Trim the end to remove any trailing line breaks or spaces.
    const text = match[1].trimEnd();
    const style = codeStyles[match.index];
    let language = style.cos_l.toLowerCase();
    if (language === 'unset') language = null;

    ranges.push({
      start: match.index + 1,
      end: match.index + text.length,
      codeBlock: {
        id: `code-${codeBlockId++}`,
        language,
        text,
      },
    });
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
          ranges.push({ bookmark: id, start: i, end: i });
        }
      }
    }
  }

  return { ids, ranges };
}

function indexOfNextNonSpace(docsText, startIndex = 0) {
  return (
    startIndex +
    docsText.slice(startIndex).match(/^[\s\uec02-\uec03]*/)[0].length
  );
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
  let currentNonspaceIndex = indexOfNextNonSpace(docsText, currentIndex);

  visitParents(tree, isText, (node, parents) => {
    const parent = parents[parents.length - 1];
    const nodeIndex = parent ? parent.children.indexOf(node) : undefined;

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
      const startInText = range.start - currentNonspaceIndex;
      const endInText = range.end - currentNonspaceIndex;
      const rangeStart = Math.max(leadingSpaces.length + startInText, 0);
      let rangeEnd = Math.max(leadingSpaces.length + endInText);

      // If the range extends into another node chop it up and put the
      // remainder back on the list of ranges to handle.
      const overreach = range.end - endIndex;
      if (overreach > 0) {
        rangeEnd = endIndex;

        const remainder = { ...range, start: endIndex };
        const point = ranges.findIndex((r) => r.start >= remainder.start);
        if (point < 0) {
          ranges.push(remainder);
        } else {
          ranges.splice(point, 0, remainder);
        }
      }

      visitor({
        node,
        nodeIndex,
        parent,
        parents,
        range,
        rangeStart,
        rangeEnd,
      });

      if (ranges.length === 0) {
        return EXIT;
      } else {
        // The next range could also be in this node, so re-visit it.
        return [CONTINUE, nodeIndex];
      }
    } else {
      currentIndex = endIndex;
      currentNonspaceIndex = indexOfNextNonSpace(docsText, currentIndex);
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
