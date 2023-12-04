import fixGoogleHtml from './fix-google-html.js';
// rehype-dom-parse is a lightweight version of rehype-parse that leverages
// browser APIs -- reduces bundle size by ~200 kB!
import parse from 'rehype-dom-parse';
import { defaultHandlers } from 'hast-util-to-mdast';
import rehype2remarkWithSpaces from './rehype-to-remark-with-spaces.js';
import remarkGfm from 'remark-gfm';
import stringify from 'remark-stringify';
import { unified } from 'unified';

/** @typedef {import("mdast-util-to-markdown").State} MdastState */
/** @typedef {import("unist").Node} UnistNode */
/** @typedef {import("hast-util-to-mdast").Handle} Handle */

/** @type {Handle} */
function preserveTagAndConvertContents (state, node, _parent) {
  return [
    { type: 'html', value: `<${node.tagName}>` },
    ...state.all(node),
    { type: 'html', value: `</${node.tagName}>` },
  ];
}

/** @type {Handle} */
function headingWithId (state, node, _parent) {
  const newNode = defaultHandlers[node.tagName](state, node);

  if (node.properties?.id) {
    newNode.children?.push({
      type: 'html',
      value: `<a id="${node.properties.id}"></a>`
    });
  }

  return newNode;
}

/**
 * Use two blank lines before headings. This is a "join" function, which tells
 * remark-stringify how to join adjacent nodes.
 * @param {UnistNode} previous
 * @param {UnistNode} next
 * @param {UnistNode} _parent
 * @param {MdastState} _state
 * @returns {boolean|number|void}
 */
function doubleBlankLinesBeforeHeadings (previous, next, _parent, _state) {
  if (previous.type !== 'heading' && next.type === 'heading') {
    return 2;
  }
  return undefined;
}

const processor = unified()
  .use(parse)
  .use(fixGoogleHtml)
  // .use(require('./lib/log-tree').default)
  .use(rehype2remarkWithSpaces, {
    handlers: {
      // Preserve sup/sub markup; most Markdowns have no markup for it.
      sub: preserveTagAndConvertContents,
      sup: preserveTagAndConvertContents,
      h1: headingWithId,
      h2: headingWithId,
      h3: headingWithId,
      h4: headingWithId,
      h5: headingWithId,
      h6: headingWithId
    }
  })
  .use(remarkGfm)
  .use(stringify, {
    bullet: '-',
    emphasis: '_',
    fences: false,
    listItemIndent: 'one',
    strong: '*',
    join: [doubleBlankLinesBeforeHeadings]
  });

/**
 * Parse a Google Docs Slice Clip (the Google Docs internal format for
 * representing copied documents or selections from a document). This parses a
 * string representing the document and unwraps it if enclosed in a wrapper
 * object. You can pass in a string or object.
 * @param {any} raw
 * @returns {any}
 */
function parseGdocsSliceClip(raw) {
  const wrapper = typeof raw === 'string' ? JSON.parse(raw) : raw;
  const data = typeof wrapper.data === 'string' ? JSON.parse(wrapper.data) : wrapper.data;

  // Do a basic check to ensure we are dealing with what we think we are. This
  // is not meant to be exhaustive or to check the exact schema.
  if (
    typeof data?.resolved?.dsl_entitypositionmap !== 'object'
    || typeof data?.resolved?.dsl_spacers !== 'string'
    || !Array.isArray(data?.resolved?.dsl_styleslices)
  ) {
    throw new SyntaxError(`Document does not appear to be a GDocs Slice Clip: ${JSON.stringify(raw)}`);
  }

  return data;
}

export function convertDocsHtmlToMarkdown(html, rawSliceClip) {
  const sliceClip = rawSliceClip ? parseGdocsSliceClip(rawSliceClip) : null;
  return processor.process({
    value: html,
    data: {
      sliceClip
    }
  }).then(result => result.value);
}
