import {
  convertDocsHtmlToMarkdown,
  defaultOptions,
  combineGoogleDocFormats,
  convertHtmlToMarkdown,
} from '../lib/convert.js';
import { settings as currentSettings } from './settings.js';

const SLICE_CLIP_MEDIA_TYPE =
  'application/x-vnd.google-docs-document-slice-clip';

const settingsForm = document.getElementById('settings');
const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');
const inputInstructions = document.querySelector('#input-area .instructions');
const outputInstructions = document.querySelector('#output-area .instructions');

function convert() {
  convertHtmlToMarkdown(inputElement.innerHTML, currentSettings.getAll())
    .then((markdown) => {
      outputElement.value = markdown;
      outputInstructions.style.display = markdown.trim() ? 'none' : '';
    })
    .catch((error) => {
      console.error(error);
      outputInstructions.style.display = '';
    });
}

function handleInput() {
  const hasContent = !!inputElement.textContent;
  inputInstructions.style.display = hasContent ? 'none' : '';

  convert();
}

inputElement.addEventListener('input', handleInput);

// If the clipboard data looks like it came from Google Docs, do some
// pre-processing before inserting it into the input area.
//
// This handles two things:
// 1. Some wrapper structure in the HTML that we want to clean out.
// 2. Pulling relevant data out of the "Slice Clip" format and updating the HTML
//    with it (when available). The clipboard HTML format from Google Docs is
//    missing a lot of detailed info the slice clip has.
inputElement.addEventListener('paste', async (event) => {
  if (!event.clipboardData) {
    console.warn('Could not access clipboard data from paste event');
    return;
  }

  let sliceClip =
    event.clipboardData.getData(SLICE_CLIP_MEDIA_TYPE) ||
    event.clipboardData.getData(`${SLICE_CLIP_MEDIA_TYPE}+wrapped`);

  let html =
    event.clipboardData.getData('text/html') ||
    event.clipboardData.getData('public.html');

  if ((html && sliceClip) || /id=['"']docs-internal-guid-/.test(html)) {
    event.preventDefault();
    const fancyHtml = await combineGoogleDocFormats(html, sliceClip);

    const selection = window.getSelection();
    if (selection.anchorNode && inputElement.contains(selection.anchorNode)) {
      // `execCommand` is discouraged these days, but is the only built-in that
      // does a nice job normalizing the HTML given the input location.
      // (That is, it handles inserting a `<p>` inside a `<p>` or some other
      // incompatible situation gracefully.)
      document.execCommand('insertHTML', false, fancyHtml);
    } else {
      inputElement.innerHTML = fancyHtml;
    }

    handleInput();
  }
});

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
    } finally {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  });
}

function updateSettingsForm() {
  for (const input of settingsForm.querySelectorAll('input,select')) {
    const value = currentSettings.get(input.name);
    if (value != null) {
      if (input.type === 'checkbox') {
        input.checked = value;
      } else {
        input.value = value;
      }
    }
  }
}

settingsForm.addEventListener('change', (event) => {
  let value = event.target.value;
  if (event.target.type === 'checkbox') {
    value = event.target.checked;
  }
  currentSettings.set(event.target.name, value);
  convert();
});

window.convertDocsHtmlToMarkdown = convertDocsHtmlToMarkdown;
currentSettings.setAll(defaultOptions, { save: false });
currentSettings.load();
updateSettingsForm();
