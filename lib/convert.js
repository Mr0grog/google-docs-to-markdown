import fixGoogleHtml from './fix-google-html';
// rehype-dom-parse is a lightweight version of rehype-parse that leverages
// browser APIs -- reduces bundle size by ~200 kB!
import parse from 'rehype-dom-parse';
import { all } from 'rehype-remark';
import rehype2remarkWithSpaces from './rehype-to-remark-with-spaces';
import stringify from 'remark-stringify';
import { unified } from 'unified';

function preserveTagAndConvertContents (h, node) {
  return [
    h(node, 'html', `<${node.tagName}>`),
    ...all(h, node),
    h(node, 'html', `</${node.tagName}>`)
  ];
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
  .use(stringify, {listItemIndent: '1'});

export function convertDocsHtmlToMarkdown(html) {
  return processor.process(html)
    .then(result => {
      // Ensure double line-break before headings
      return result.value.replace(/(\n\s+)#/g, (_, breaks) => {
        breaks = breaks.replace(/[^\n]/g, '');
        if (breaks.length < 3) breaks = '\n\n\n';

        return `${breaks}#`;
      });
    });
}
