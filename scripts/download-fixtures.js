#!/usr/bin/env node

import { setTimeout } from 'node:timers/promises';
import path from 'node:path';
import { parseArgs } from 'node:util';
import { writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';
// We need this for Node.js 16. It's built-in on v18+, so remove if updating.
import { fetch } from 'undici';

const COMMAND_KEY = process.platform === 'darwin' ? 'Meta' : 'Control';
const FIXTURE_PATH = '../test/fixtures';
const FIXTURES = {
  'code-blocks': '1sgDx9lNbL3B7EWBKjpsAaBVIsJAEErfv8uggAFshn3I',
  'code-blocks-mixed': '1D56ytnyzkCG-OSn6m83B5JxPjwgZ05iSSUUbLuYzmzc',
  'code-inline': '1bEp38sjESFK8q1PLwfesZgNDMwEsqeGulaq4Vb7r9IA',
  'headings-and-paragraphs': '1Dm5DIHOVAvsGYgTaPuhq78PefT_5u10RFsRBxunxBtQ',
  'inline-formatting': '1-0E8y62m1tI6MWYYbGcbBALylL9hT9Toq9SssCeT-Ew',
  'lists': '1bZI3NwaasFZGexGQG9YC07UAovpY9b_mfdI2_KgT8-0',
  'list-item-level-styling': '10W_0kk4mBViHMIahKcg4WwBu-HLCyw12BG7NC2lyuA8',
  'tables': '1sdDeTF4uEwAlp6VDx_Jk_yJYS0wtnOWj0J63aSU3zsQ',
  'linebreaks-at-the-end-of-links':
    '1YES2UjSQV16TOWhVT0fXoXvYTwrtdcKcO8kxr4-9yPs',
  'internal-links': '1Y4u0ZfjCLGB1nwg7aAw3f0QOD_ZAWak-AO-sbUtihco',
};
const DOCUMENT_SLICE_CLIP_TYPE =
  'application/x-vnd.google-docs-document-slice-clip+wrapped';

function googleDocUrl(documentId) {
  return `https://docs.google.com/document/d/${documentId}`;
}

function googleDocExportUrl(documentId) {
  return `https://docs.google.com/document/export?format=html&id=${documentId}`;
}

/**
 * @param {import('playwright').Browser} browser
 * @param {string} documentId
 */
async function copyGoogleDocContent(browser, documentId) {
  const page = await browser.newPage();
  await page.goto(googleDocUrl(documentId));
  await setTimeout(500);

  // If there's a dialog, click through to dismiss.
  const modalButton = page.getByText('Got It!');
  if (await modalButton.count()) {
    await modalButton.click();
    await setTimeout(500);
  }

  await page.click('body', {
    position: {
      x: page.viewportSize().width / 2,
      y: page.viewportSize().height / 2,
    },
  });
  await page.press('body', `${COMMAND_KEY}+a`);
  await page.press('body', `${COMMAND_KEY}+c`);
  await page.close();
}

/**
 * @param {import('playwright').Browser} browser
 * @returns {Promise<{ html: string, documentSliceClip: string }>}
 */
async function getPasteboardAsHtml(browser) {
  const blank = await browser.newPage();
  await blank.setContent(`
    <html>
      <head>
        <meta charset="utf-8">
      </head>
      <body>
        <div
          id="paste-area"
          style="width: 100%; height: 500px;"
          contenteditable
        >
        </div>
      </body>
  `);

  // Register a paste handler to get the Google Docs "document slice" formatted
  // data from the clipboard. This stores the pasted data globally so we can
  // grab it after running the paste command.
  //
  // (Nov. 15, 2023) At this time, Chromium's pasteboard APIs have some weird
  // idiosyncracies in headless mode.
  // * The paste event only has data for the custom Google Docs Slice type,
  //   and not for plain text or HTML (actually it has plain text and HTML
  //   listed, but their contents are empty strings).
  // * The `navigator.clipboard.read()` API doesn't seem to be present on
  //   `about:blank`, even if you grant permissions. So we have to use the
  //   paste event, which is more complicated.
  // * The `navigator.clipboard.read()` API claims the clipboard has no valid
  //   data on `http://docs.google.com`, even if you grant permissions, so that
  //   doesn't work either.
  // * Some of these things work in headful mode, but running that on CI is
  //   is more complicated.
  //
  // So: for now we need the paste event to get the custom Docs Slice data and
  // the contenteditable area to get the HTML.
  //
  // TODO: Revisit this every so often to see if things have improved so we can
  // simplify all this stuff.
  await blank.evaluate((sliceFormat) => {
    document.addEventListener('paste', async (event) => {
      window.__pasteData__ = {
        types: event.clipboardData.types,
        html:
          event.clipboardData.getData('text/html') ||
          event.clipboardData.getData('public.html'),
        documentSliceClip: event.clipboardData.getData(sliceFormat),
      };
    });
  }, DOCUMENT_SLICE_CLIP_TYPE);

  await setTimeout(100);
  // Since we can't get HTML from the clipboard or paste event (see above),
  // pasting into a contenteditable element is the next best thing. It does not
  // get the content exactly as it was on the clipboard, though.
  const pasteArea = blank.locator('#paste-area');
  await pasteArea.click();
  await pasteArea.press(`${COMMAND_KEY}+v`);

  // Get Google Docs's internal Slice Clip data.
  const pasteData = await blank.evaluate(() => window.__pasteData__);
  if (!pasteData.documentSliceClip) {
    throw new Error(
      `Paste data was missing Google Docs's internal slice clip format ` +
        `(${DOCUMENT_SLICE_CLIP_TYPE})!`
    );
  }
  // FIXME: This appears to actually work in GH Actions runners on Ubuntu, but
  // not on MacOS. Needs more investigation into platform support.
  if (process.platform === 'darwin' && pasteData.html) {
    throw new Error(
      'Paste data contained HTML! Please update download-fixtures.js to use ' +
        'this data directly from the clipboard instead of a contenteditable ' +
        'element.'
    );
  }

  // Get the pasted, HTML-formatted data.
  const pastedHtml = await pasteArea.innerHTML();

  await blank.close();
  return {
    html: pastedHtml.trim(),
    documentSliceClip: pasteData.documentSliceClip,
  };
}

/**
 * Get the HTML version of a Google Doc as copied from the Docs web UI.
 * @param {import('playwright').Browser} browser
 * @param {string} documentId
 * @returns {Promise<{ html: string, documentSliceClip: string }>}
 */
async function getCopiedGoogleDocHtml(browser, documentId) {
  await copyGoogleDocContent(browser, documentId);
  return await getPasteboardAsHtml(browser);
}

/**
 * Get a Google Doc as exported HTML.
 * @param {string} documentId
 */
async function getExportedGoogleDocHtml(documentId) {
  const url = googleDocExportUrl(documentId);
  const response = await fetch(url);
  if (response.status >= 400) {
    throw new Error(`${response.status} Bad Response getting ${url}`);
  }
  return await response.text();
}

/**
 * Clean up copied HTML from a Google Doc so that identical docs have identical
 * HTML.
 * @param {string} html
 * @returns {string}
 */
function cleanCopiedHtml(html) {
  // Google Docs adds a unique GUID to every copy operation. Overwrite it
  // so we only track meaningful changes to the content of the fixture.
  return html.replace(
    /id="docs-internal-guid-\w{8}-\w{4}-\w{4}-\w{4}-\w{12}"/,
    `id="docs-internal-guid-dddddddd-dddd-dddd-dddd-123456789abc"`
  );
}

/**
 * Clean up exported HTML from a Google Doc so that identical docs have
 * identical HTML.
 *
 * The Docs exporter does some pretty funky stuff, with lots of CSS bits coming
 * in an unpredictable order. This tries to rename and sort classes and rules
 * so they are predictable, but sometimes Google Docs exports different sets
 * of classes for the same content (e.g. sometimes common styles for multiple
 * elements get separate classes and sometimes they don't for the exact same
 * document!). I'm not sure we can do much about that, and it's probably not
 * worth too much effort to fix for this script.
 * @param {string} html
 * @returns {string}
 */
function cleanExportedHtml(html) {
  // Exported docs use a set of seemingly randomly-numbered class names.
  // Re-number them in document order.
  const oldToNewName = {};
  let nextNumber = 1;

  // Rename the classes in HTML `class` attributes.
  let reformatted = html.replace(
    /\sclass="([^"]+)"(\s|>)/gi,
    (_, classValue, ending) => {
      const newClasses = classValue
        .split(' ')
        .map((name) => {
          // Only rename the names like "c1" (there are other meaningful names).
          if (!/^c\d+$/.test(name)) return name;

          let newName = oldToNewName[name];
          if (!newName) {
            newName = oldToNewName[name] = `c${nextNumber}`;
            nextNumber++;
          }

          return newName;
        })
        .join(' ');
      return ` class="${newClasses}"${ending}`;
    }
  );

  // Update the stylesheet to use the new class names and sort them.
  try {
    const numberedSelectorPattern = /\.(c\d+)\b/g;

    // TODO: this should probably use a CSS parser instead of all these crazy
    // regexes to avoid weird cases.
    reformatted = reformatted.replace(
      /(<style[^>]*>)(.*?)<\/style>/,
      (_, opening, cssText) => {
        if (cssText.includes('@')) {
          console.warn(
            "It looks like there is an @-rule in the document's CSS, which we " +
              "can't handle. Saving as-is without reformatting CSS."
          );
          throw Object.assign(new Error('Complex CSS'), { code: 'abort' });
        }

        // Pull out the CSS rules for renamed classes.
        const rules = [];
        const extraCss = cssText.replace(
          /([^\s@{][^{]*)\{(.*?)}/g,
          (text, selector, body) => {
            if (selector.match(numberedSelectorPattern)) {
              rules.push({ text, selector, body });
              return '';
            } else {
              return text;
            }
          }
        );

        // Rename the classes in the selectors and sort them.
        const newCssText = rules
          .map((rule) => {
            numberedSelectorPattern.lastIndex = 0;
            const newSelector = rule.selector.replace(
              numberedSelectorPattern,
              (match, oldName) => {
                const newName = oldToNewName[oldName];
                if (newName) {
                  return `.${newName}`;
                } else {
                  console.warn(
                    `Found un-renamed CSS class in document stylesheet: "${oldName}". Leaving it as-is.`
                  );
                  return match;
                }
              }
            );
            return { ...rule, selector: newSelector };
          })
          .sort((a, b) => (a.selector < b.selector ? -1 : 1))
          .map((rule) => `${rule.selector}{${rule.body}}`)
          .join('');

        return `${opening}${extraCss}${newCssText}</style>`;
      }
    );
  } catch (error) {
    if (error.code === 'abort') {
      return html;
    }
    throw error;
  }

  return reformatted;
}

/**
 * Clean up Google Docs Document Slice Clip data so that identical docs have
 * identical data.
 * @param {string} jsonString
 * @returns {string}
 */
function cleanDocumentSliceClip(jsonString) {
  const data = JSON.parse(jsonString);
  data.edi = '<random>';
  data.edrk = '<random>';

  // I'm not totally sure what the `si` property represents, but sometimes it's
  // included and sometimes it's not, with no noticeable impact. If it's an
  // empty string, we just remove it in order to reduce pointless changes.
  if (data.si === '') {
    delete data.si;
  }

  return JSON.stringify(data, null, 2);
}

async function downloadFixtures(destination) {
  console.log(`Downloading fixtures to: "${destination}"`);
  // Firefox strips the rich formatting when pasting in headless mode (!), but
  // Chromium does not, so we need to use Chromium here.
  const browser = await chromium.launch({ headless: true });
  try {
    for (const [name, id] of Object.entries(FIXTURES)) {
      console.log(`Loading ${name} (Google doc: "${id}")...`);

      let copied = await getCopiedGoogleDocHtml(browser, id);
      await writeFile(
        path.join(destination, `${name}.copy.html`),
        cleanCopiedHtml(copied.html),
        { encoding: 'utf-8' }
      );
      await writeFile(
        path.join(destination, `${name}.copy.gdocsliceclip.json`),
        cleanDocumentSliceClip(copied.documentSliceClip),
        { encoding: 'utf-8' }
      );

      let exported = await getExportedGoogleDocHtml(id);
      exported = cleanExportedHtml(exported);
      await writeFile(path.join(destination, `${name}.export.html`), exported, {
        encoding: 'utf-8',
      });
    }
  } finally {
    browser.close();
  }
}

function listFixtures() {
  const nameSize = Math.max(...Object.keys(FIXTURES).map((x) => x.length));
  for (const [name, id] of Object.entries(FIXTURES)) {
    console.log(`Name: ${name.padEnd(nameSize)} | Doc: ${googleDocUrl(id)}`);
  }
}

// Main logic!
const { values, positionals } = parseArgs({
  options: {
    help: { type: 'boolean', short: 'h' },
    list: { type: 'boolean' },
  },
});

if (values.help) {
  console.log(`Download fixtures as HTML from Google Drive.

Usage: download-fixtures.js [DESTINATION_DIRECTORY_PATH]

Options:
  --help    Print this help message.
  --list    List fixtures to download.
  `);
} else if (values.list) {
  listFixtures();
} else {
  const fixturesPath =
    positionals[2] || new URL(FIXTURE_PATH, import.meta.url).pathname;
  await downloadFixtures(fixturesPath);
}
