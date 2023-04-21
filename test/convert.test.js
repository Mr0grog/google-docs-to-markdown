// import assert from 'node:assert/strict';
import { convertDocsHtmlToMarkdown } from '../lib/convert.js';

// FIXME: all these helpers should be moved into a separate module!

/**
 * Clean up a Markdown string from the fixtures directory. This mainly removes
 * comments and comment lines (so we can have comments in the expectations
 * without having them impact the tests).
 * @param {string} rawText 
 * @returns string
 */
function cleanMarkdown (rawText) {
  return rawText.replace(/<!--.+-->\n?/g, '');
}

/**
 * Load the copy-based and export-based HTML of a google doc, plus the expected
 * Markdown conversion of the doc.
 * @param {string} name
 * @returns {Promise<[string, string, string]>}
 */
async function loadFixtures(name) {
  function checkStatus (response) {
    if (response.status === 404) {
      throw new Error(`Could not find fixture: "${response.url}"`);
    }
    else if (response.status >= 400) {
      throw new Error(`Status ${response.status} loading fixture: "${response.url}"`);
    }
    else {
      return response;
    }
  }

  async function fetchFileText(url) {
    const response = await fetch(url);
    checkStatus(response);
    return await response.text();
  }

  let files = await Promise.all([
    fetchFileText(`/fixtures/${name}.copy.html`),
    fetchFileText(`/fixtures/${name}.export.html`),
    fetchFileText(`/fixtures/${name}.expected.md`),
  ]);

  files[2] = cleanMarkdown(files[2]);

  return files;
}

// FIXME: should import Chai or similar to do the assertions instead of this.
function lazyAssertEqualStrings(a, b, message = 'Strings do not match.') {
  if (a !== b) {
    // throw new Error(`${message}\n  Got:      "${a}"\n  Expected: "${b}"`)
    const formatLine = (text) => text?.replace(/ /g, '⋅') ?? '<no line>';
    const aLines = a.split("\n");
    const bLines = b.split("\n");
    const lineCount = Math.max(aLines.length, bLines.length);
    const numberSize = lineCount.toString().length;
    const comparisonLines = [];
    for (let i = 0; i < lineCount; i++) {
      const lineNumber = (i + 1).toString().padStart(numberSize, ' ');
      comparisonLines.push(`Expected ${lineNumber}: ${formatLine(bLines[i])}`);
      comparisonLines.push(`Got      ${lineNumber}: ${formatLine(aLines[i])}`);
      if (aLines[i] !== bLines[i]) {
        comparisonLines.push(`  Mismatch on this line! ^^^^^^^^^^^^^^^^^^^^^`);
      }
    }
    throw new Error(`${message}\n${comparisonLines.join('\n')}`);
  }
}

describe('convert', () => {
  function createFixtureTest(name, { type, skip = false }) {
    const test = skip ? it.skip : it;

    test(`converts ${name} (${type})`, async () => {
      const [copy, exported, expected] = await loadFixtures(name);
      const testInput = type === 'copy' ? copy : exported;
      const md = await convertDocsHtmlToMarkdown(testInput);
      lazyAssertEqualStrings(md, expected);
    });
  }

  createFixtureTest('headings-and-paragraphs', { type: 'copy' });
  createFixtureTest('headings-and-paragraphs', { type: 'export', skip: true });
  
  createFixtureTest('inline-formatting', { type: 'copy' });
  createFixtureTest('inline-formatting', { type: 'export', skip: true });

  createFixtureTest('lists', { type: 'copy' });
  createFixtureTest('lists', { type: 'export', skip: true });


  // At current, it doesn't seem like this situation can happen in a Google Doc,
  // but it's worth supporting just in case things change or users want to
  // convert more arbitrary HTML.
  it('handles nested space-sensitive elements', async () => {
    let md = await convertDocsHtmlToMarkdown(`
      <p>This<strong> <em> is bold and italic </em> </strong>
    `);

    lazyAssertEqualStrings(md, `This  **_is bold and italic_**  \n`);
  });
});
