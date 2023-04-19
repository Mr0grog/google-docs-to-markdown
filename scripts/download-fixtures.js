#!/usr/bin/env node

import { setTimeout } from 'node:timers/promises';
import path from 'node:path';
import { parseArgs } from 'node:util';
import { writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';

const COMMAND_KEY = process.platform === 'darwin' ? 'Meta' : 'Control';
const FIXTURE_PATH = '../test/fixtures';
const FIXTURES = {
  'headings-and-paragraphs': '1Dm5DIHOVAvsGYgTaPuhq78PefT_5u10RFsRBxunxBtQ',
  'inline-formatting': '1-0E8y62m1tI6MWYYbGcbBALylL9hT9Toq9SssCeT-Ew',
  'lists': '1bZI3NwaasFZGexGQG9YC07UAovpY9b_mfdI2_KgT8-0'
};

function googleDocUrl (documentId) {
  return `https://docs.google.com/document/d/${documentId}`;
}

function googleDocExportUrl (documentId) {
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

  await page.click("body", {
    position: {
      x: page.viewportSize().width / 2,
      y: page.viewportSize().height / 2
    }
  });
  await page.press('body', `${COMMAND_KEY}+a`);
  await page.press('body', `${COMMAND_KEY}+c`);
  await page.close();
}

/**
 * @param {import('playwright').Browser} browser
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
  await setTimeout(500);
  const pasteArea = blank.locator('#paste-area');
  await pasteArea.click();
  await pasteArea.press(`${COMMAND_KEY}+v`);
  const pastedHtml = await pasteArea.innerHTML();
  await blank.close();
  return pastedHtml.trim();
}

/**
 * Get the HTML version of a Google Doc as copied from the Docs web UI.
 * @param {import('playwright').Browser} browser
 * @param {string} documentId
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
  let reformatted = html.replace(/\sclass="([^"]+)"(\s|>)/ig, (_, classValue, ending) => {
    const newClasses = classValue
      .split(" ")
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
  });

  // Update the stylesheet to use the new class names and sort them.
  try {
    const numberedSelectorPattern = /\.(c\d+)\b/g;
    
    // TODO: this should probably use a CSS parser instead of all these crazy
    // regexes to avoid weird cases.
    reformatted = reformatted.replace(/(<style[^>]*>)(.*?)<\/style>/, (_, opening, cssText) => {
      if (cssText.includes('@')) {
        console.warn(
          "It looks like there is an @-rule in the document's CSS, which we "
          + "can't handle. Saving as-is without reformatting CSS."
        );
        throw Object.assign(new Error("Complex CSS"), { code: 'abort' });
      }

      // Pull out the CSS rules for renamed classes.
      const rules = [];
      const extraCss = cssText.replace(/([^\s@{][^{]*)\{(.*?)}/g, (text, selector, body) => {
        if (selector.match(numberedSelectorPattern)) {
          rules.push({ text, selector, body });
          return '';
        }
        else {
          return text;
        }
      });

      // Rename the classes in the selectors and sort them.
      const newCssText = rules
        .map((rule) => {
          numberedSelectorPattern.lastIndex = 0;
          const newSelector = rule.selector.replace(numberedSelectorPattern, (match, oldName) => {
            const newName = oldToNewName[oldName];
            if (newName) {
              return `.${newName}`;
            }
            else {
              console.warn(`Found un-renamed CSS class in document stylesheet: "${oldName}". Leaving it as-is.`);
              return match;
            }
          });
          return { ...rule, selector: newSelector };
        })
        .sort((a, b) => (a.selector < b.selector ? -1 : 1))
        .map((rule) => `${rule.selector}{${rule.body}}`)
        .join('');

      return `${opening}${extraCss}${newCssText}</style>`;
    });
  }
  catch (error) {
    if (error.code === 'abort') {
      return html;
    }
    throw error;
  }

  return reformatted;
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
      copied = cleanCopiedHtml(copied);
      await writeFile(path.join(destination, `${name}.copy.html`), copied, {
        encoding: 'utf-8'
      });

      let exported = await getExportedGoogleDocHtml(id);
      exported = cleanExportedHtml(exported);
      await writeFile(path.join(destination, `${name}.export.html`), exported, {
        encoding: 'utf-8'
      });
    }
  } finally {
    browser.close();
  }
}

function listFixtures () {
  const nameSize = Math.max(...Object.keys(FIXTURES).map(x => x.length));
  for (const [name, id] of Object.entries(FIXTURES)) {
    console.log(`Name: ${name.padEnd(nameSize)} | Doc: ${googleDocUrl(id)}`);
  }
}

// Main logic!
const { values, positionals } = parseArgs({
  options: {
    help: { type: 'boolean', short: 'h' },
    list: { type: 'boolean' }
  }
});

if (values.help) {
  console.log(`Download fixtures as HTML from Google Drive.

Usage: download-fixtures.js [DESTINATION_DIRECTORY_PATH]

Options:
  --help    Print this help message.
  --list    List fixtures to download.
  `);
}
else if (values.list) {
  listFixtures();
}
else {
  const fixturesPath = positionals[2] || new URL(FIXTURE_PATH, import.meta.url).pathname;
  await downloadFixtures(fixturesPath);
}
