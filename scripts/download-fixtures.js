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

async function downloadFixtures(destination) {
  console.log(`Downloading fixtures to: "${destination}"`);
  // Firefox strips the rich formatting when pasting in headless mode (!), but
  // Chromium does not, so we need to use Chromium here.
  const browser = await chromium.launch({ headless: true });
  try {
    for (const [name, id] of Object.entries(FIXTURES)) {
      console.log(`Loading ${name} (Google doc: "${id}")...`);

      let copied = await getCopiedGoogleDocHtml(browser, id);
      // Google Docs adds a unique GUID to every copy operation. Overwrite it
      // so we only track meaningful changes to the content of the fixture.
      copied = copied.replace(
        /id="docs-internal-guid-\w{8}-\w{4}-\w{4}-\w{4}-\w{12}"/,
        `id="docs-internal-guid-dddddddd-dddd-dddd-dddd-123456789abc"`
      );
      await writeFile(path.join(destination, `${name}.copy.html`), copied, {
        encoding: 'utf-8'
      });

      const exported = await getExportedGoogleDocHtml(id);
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
