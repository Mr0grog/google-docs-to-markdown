import { convertDocsHtmlToMarkdown } from './lib/convert.js';
import debug from 'debug';

const SLICE_CLIP_MEDIA_TYPE = 'application/x-vnd.google-docs-document-slice-clip';

const log = debug('app:index:debug');

const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');
const inputInstructions = document.querySelector('#input-area .instructions');
const outputInstructions = document.querySelector('#output-area .instructions');

// Hold most recently pasted Slice Clip (the Google Docs internal copy/paste
// format) globally so we can re-use it if the user hand-edits the input.
let latestSliceClip = null;
inputElement.addEventListener('paste', event => {
  if (!event.clipboardData) {
    console.warn('Could not access clipboard data from paste event');
    return;
  }

  // Allow for raw or wrapped slice clips (one uses a "+wrapped" suffix).
  const sliceClipType = event.clipboardData.types.find(type =>
    type.startsWith(SLICE_CLIP_MEDIA_TYPE)
  );
  log('Slice clip media type: %s', sliceClipType);
  if (sliceClipType) {
    const sliceClip = event.clipboardData.getData(sliceClipType);
    log('raw slice clip: %s', sliceClip);
    latestSliceClip = sliceClip;
  }
});

inputElement.addEventListener('input', () => {
  const hasContent = !!inputElement.textContent;
  inputInstructions.style.display = hasContent ? 'none' : '';

  convertDocsHtmlToMarkdown(inputElement.innerHTML, latestSliceClip)
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
    const file = new File([outputElement.value], 'Converted Text.md', {
      type: 'text/markdown',
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
    }
    finally {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  });
}
