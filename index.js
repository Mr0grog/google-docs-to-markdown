import fixGoogleHtml from './lib/fix-google-html';
// rehype-dom-parse is a lightweight version of rehype-parse that leverages
// browser APIs -- reduces bundle size by ~200 kB!
import parse from 'rehype-dom-parse';
import { all } from 'rehype-remark';
import rehype2remarkWithSpaces from './lib/rehype-to-remark-with-spaces';
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

function convertToMarkdown (html) {
  return processor.process(inputElement.innerHTML)
    .then(result => {
      // Ensure double line-break before headings
      return result.value.replace(/(\n\s+)#/g, (_, breaks) => {
        breaks = breaks.replace(/[^\n]/g, '');
        if (breaks.length < 3) breaks = '\n\n\n';

        return `${breaks}#`;
      });
    });
}


const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');
const inputInstructions = document.querySelector('#input-area .instructions');
const outputInstructions = document.querySelector('#output-area .instructions');

inputElement.addEventListener('input', event => {
  const hasContent = !!inputElement.textContent;
  inputInstructions.style.display = hasContent ? 'none' : '';

  convertToMarkdown(inputElement.innerHTML)
    .then(markdown => {
      outputElement.value = markdown;
      outputInstructions.style.display = markdown.trim() ? 'none' : '';
    })
    .catch(error => {
      console.error(error);
      outputInstructions.style.display = '';
    });
});

window.convertToMarkdown = convertToMarkdown;

const copyButton = document.getElementById('copy-button');
navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
  if (!["granted", "prompt"].includes(result.state)) {
    return;
  }

  copyButton.style.display = '';
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(outputElement.value).catch(() => {
      alert("Unable to copy markdown to clipboard.");
    });
  });
});
