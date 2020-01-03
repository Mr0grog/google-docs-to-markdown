import fixGoogleHtml from './lib/fix-google-html';
// rehype-dom-parse is a lightweight version of rehype-parse that leverages
// browser APIs -- reduces bundle size by ~200 kB!
// const parse = require('rehype-dom-parse').default;
import parse from 'rehype-dom-parse';
import rehype2remarkWithSpaces from './lib/rehype-to-remark-with-spaces';
import stringify from 'remark-stringify';
import unified from 'unified';


const processor = unified()
  .use(parse)
  .use(fixGoogleHtml)
  // .use(require('./lib/log-tree').default)
  .use(rehype2remarkWithSpaces)
  .use(stringify, {listItemIndent: '1'});

function convertToMarkdown (html) {
  return processor.process(inputElement.innerHTML).then(String);
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
