import fixGoogleHtml from './fix-google-html.js';
// rehype-dom-parse is a lightweight version of rehype-parse that leverages
// browser APIs -- reduces bundle size by ~200 kB!
import parse from 'rehype-dom-parse';
import { all } from 'rehype-remark';
import rehype2remarkWithSpaces from './rehype-to-remark-with-spaces.js';
import remarkGfm from 'remark-gfm';
import stringify from 'remark-stringify';
import { unified } from 'unified';

/** @typedef {import("mdast-util-to-markdown").State} MdastState */
/** @typedef {import("unist").Node} UnistNode */

function preserveTagAndConvertContents (h, node) {
  return [
    h(node, 'html', `<${node.tagName}>`),
    ...all(h, node),
    h(node, 'html', `</${node.tagName}>`)
  ];
}

function headingWithId (h, node) {
  const children = all(h, node)

  if (node?.properties?.id) {
    children.push(h(node, 'html', `<a id="${node.properties.id}"></a>`))
  }

  return h(node, 'heading', { depth: parseInt(node.tagName.slice(1)) }, children)
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
    listItemIndent: '1',
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
