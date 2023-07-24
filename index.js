import { convertDocsHtmlToMarkdown } from './lib/convert.js';

const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');
const inputInstructions = document.querySelector('#input-area .instructions');
const outputInstructions = document.querySelector('#output-area .instructions');

inputElement.addEventListener('input', event => {
  const hasContent = !!inputElement.textContent;
  inputInstructions.style.display = hasContent ? 'none' : '';

  convertDocsHtmlToMarkdown(inputElement.innerHTML)
    .then(markdown => {
      outputElement.value = markdown;
      outputInstructions.style.display = markdown.trim() ? 'none' : '';
    })
    .catch(error => {
      console.error(error);
      outputInstructions.style.display = '';
    });
});

window.convertDocsHtmlToMarkdown = convertDocsHtmlToMarkdown;

const copyButton = document.getElementById('copy-button');
if (navigator.clipboard && navigator.clipboard.writeText) {
  copyButton.style.display = '';
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(outputElement.value).catch((error) => {
      alert(`Unable to copy markdown to clipboard: ${error}`);
    });
  });
}

const downloadButton = document.getElementById('download-button');
if (window.URL && window.File) {
  downloadButton.style.display = '';
  downloadButton.addEventListener('click', () => {
    // generate file  
    const file = new window.File(
      [outputElement.value],
      'Converted Text.md', {
      type: "text/markdown",
    });

    // make a link and click it
    const link = document.createElement("a");
    const url = window.URL.createObjectURL(file);
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();

    // cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  });
}
