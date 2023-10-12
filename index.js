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
    navigator.clipboard.writeText(outputElement.value).catch(error => {
      alert(`Unable to copy markdown to clipboard: ${error}`);
    });
  });
}

const downloadButton = document.getElementById('download-button');
if (window.URL && window.File) {
  downloadButton.style.display = '';
  downloadButton.addEventListener('click', () => {
    const file = new File([outputElement.value], 'Converted Text.md', {
      type: 'text/markdown'
    });

    // Make a link to the file and click it to trigger a download. Chrome has a
    // fancy API for opening a save dialog, but other browsers do not, and this
    // is the most universal way to download a file created in the front-end.
    let url, link;
    try {
      url = URL.createObjectURL(file);
      link = document.createElement('a');
      link.href = url;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
    } finally {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  });
}
