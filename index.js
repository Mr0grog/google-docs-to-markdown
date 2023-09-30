import { convertDocsHtmlToMarkdown } from './lib/convert.js';
import { slug } from 'github-slugger';
import debug from 'debug'

const log = debug('app:index:log')
const error = debug('app:index:error')

const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');
const inputInstructions = document.querySelector('#input-area .instructions');
const outputInstructions = document.querySelector('#output-area .instructions');

/**
 * @template T
 * @template U
 * @param {() => T} fn 
 * @param {(error: unknown) => U} errorHandler 
 * @returns {T | U}
 */
function tryCatch (fn, errorHandler = (error) => {
  error(error)
  return undefined
}) {
  try {
    return fn()
  } catch (err) {
    return errorHandler(err)
  }
}

function processNewInput () {
  const hasContent = !!inputElement.textContent;
  inputInstructions.style.display = hasContent ? 'none' : '';

  convertDocsHtmlToMarkdown(inputElement.innerHTML)
    .then(markdown => {
      outputElement.value = markdown;
      outputInstructions.style.display = markdown.trim() ? 'none' : '';
    })
    .catch(error => {
      error(error);
      outputInstructions.style.display = '';
    });
}

inputElement.addEventListener('paste', event => {
  event.preventDefault()

  // transform internal content into useful data
  const internalContent = tryCatch(() => {
    log('event.clipboardData.types', event.clipboardData.types)
    const internalType = event.clipboardData.types.find(type => 
      type.startsWith('application/x')
    )
    log('internalType', internalType)
    const rawInternalContent = event.clipboardData.getData(internalType)
    log('rawInternalContent', rawInternalContent)
    return JSON.parse(JSON.parse(rawInternalContent).data).resolved
  })
  
  const internalHeadings = internalContent && tryCatch(() => {
    return internalContent
      .dsl_styleslices
      .find(styleslice => styleslice.stsl_type === 'paragraph')
      .stsl_styles
      .filter(style => style?.ps_hdid)
      .map(heading => ({ level: heading.ps_hd, id: heading.ps_hdid }))
  })

  // process HTML content
  const htmlContent = event.clipboardData.getData('text/html')
  log('htmlContent', htmlContent)
  const selection = window.getSelection();
  if (!selection.rangeCount) return;
  selection.deleteFromDocument();
  const newContent = document.createElement('span');
  newContent.innerHTML = htmlContent;

  // process the pasted HTML based on the internal content
  if (internalHeadings && internalHeadings.length > 0) {
    const headings = Array.from(newContent.querySelectorAll('h1, h2, h3, h4, h5, h6'))

    // check if the headings are the same
    if (!headings.every(
      (heading, index) => heading.nodeName.toLowerCase() === `h${internalHeadings[index].level}`)
    ) {
      log('headings are not the same')
      return
    }

    // remove the initial heading IDs, if any
    headings.forEach((heading) => {
      heading.id = ''
    })

    // make new, readable heading IDs and
    // map the internal heading IDs to the new heading IDs
    const headingIdMap = new Map()
    headings.forEach((heading, index) => {
      const internalHeading = internalHeadings[index]
      const rawNewId = slug(heading.textContent)
      let count = 0
      while (true) {
        const newId = count === 0 ? rawNewId : `${rawNewId}-${count}`
        const exists = inputElement.querySelector(`#${newId}`) || newContent.querySelector(`#${newId}`)
        if (!exists) {
          heading.id = newId
          headingIdMap.set(internalHeading.id, newId)
          break
        }
        count++
      }
    })

    // update the internal links
    const links = Array.from(newContent.querySelectorAll('a'))
    links.forEach(link => {
      const href = link.getAttribute('href')
      const url = tryCatch(() => new URL(href))
      if (url && url.host === 'docs.google.com') {
        const internalHeadingId = tryCatch(() => url.hash.match(/^#heading=([a-z0-9.]+)$/)[1])
        const newId = headingIdMap.get(internalHeadingId)
        if (newId) {
          link.setAttribute('href', `#${newId}`)
        }
      }
    })
  }

  // insert the new content
  selection.getRangeAt(0).insertNode(newContent);
  selection.collapseToEnd();

  processNewInput();
})

inputElement.addEventListener('input', () => {
  processNewInput();
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
