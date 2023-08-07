import fixGoogleHtml from './fix-google-html.js';
// rehype-dom-parse is a lightweight version of rehype-parse that leverages
// browser APIs -- reduces bundle size by ~200 kB!
import parse from 'rehype-dom-parse';
import { all } from 'rehype-remark';
import rehype2remarkWithSpaces from './rehype-to-remark-with-spaces.js';
import remarkGfm from 'remark-gfm';
import stringify from 'remark-stringify';
import { unified } from 'unified';

/** @typedef {import("mdast-util-to-markdown").State} as MdastState */
/** @typedef {import("unist").Node} UnistNode */

function preserveTagAndConvertContents (h, node) {
  return [
    h(node, 'html', `<${node.tagName}>`),
    ...all(h, node),
    h(node, 'html', `</${node.tagName}>`)
  ];
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
      sup: preserveTagAndConvertContents
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

export function convertDocsHtmlToMarkdown(html) {
  return processor.process(html).then(result => result.value);
}
