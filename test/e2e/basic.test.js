import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { browser, $, expect } from '@wdio/globals';
import { Key } from 'webdriverio';
import { getTestTempDirectory, waitForFileExists } from '../support/utils.js';
import { loadFixture } from '../support/fixtures.js';

async function writeToClipboard(browser, data) {
  // The tests don't necessarily load via HTTPS, so we can't rely on
  // `navigator.clipboard` being available. Instead, trap & trigger traditional
  // clipboard events.
  const elementId = 'temp-auto-copy-area';

  await browser.execute(
    (id, data) => {
      const textarea = document.createElement('textarea');
      textarea.id = id;
      textarea.style = 'opacity: 0;';
      document.body.appendChild(textarea);
      textarea.addEventListener('copy', (event) => {
        event.preventDefault();
        for (const [type, value] of Object.entries(data)) {
          event.clipboardData.setData(type, value);
        }
      });
    },
    elementId,
    data
  );

  await $(`#${elementId}`).click();
  await browser.keys([Key.Ctrl, 'c']);
  await browser.execute((id) => {
    document.getElementById(id).remove();
  }, elementId);
}

describe('Basic functionality', () => {
  it('should convert input and display in output area', async () => {
    await browser.url('/');

    const $input = await $('#input');
    const $output = await $('#output');

    await $input.click();
    // Ideally, this would be `browser.keys([Key.Ctrl, 'b'])`, but only some
    // browsers automatically map basic formatting commands to the keyboard.
    await browser.execute(() => {
      document.execCommand('bold', false, null);
    });
    await browser.keys('convert me');

    await expect($output).toHaveValue('**convert me**');
  });

  it('should convert pasted HTML + Slice Clip', async () => {
    const html = await loadFixture('internal-links.copy.html');
    const sliceClip = await loadFixture(
      'internal-links.copy.gdocsliceclip.json'
    );
    const markdown = await loadFixture('internal-links.expected.md');
    await writeToClipboard(browser, {
      'text/html': html,
      'application/x-vnd.google-docs-document-slice-clip+wrapped': sliceClip,
    });

    await browser.url('/');

    const $input = await $('#input');
    const $output = await $('#output');

    await $input.click();
    await browser.keys([Key.Ctrl, 'v']);

    await expect($output).toHaveValue(markdown.trim());
  });

  it('should convert pasted HTML with missing slice clip', async () => {
    const html = await loadFixture('inline-formatting.copy.html');
    const markdown = await loadFixture('inline-formatting.expected.md');
    await writeToClipboard(browser, { 'text/html': html });

    await browser.url('/');

    const $input = await $('#input');
    const $output = await $('#output');

    await $input.click();
    await browser.keys([Key.Ctrl, 'v']);

    await expect($output).toHaveValue(markdown.trim());
  });

  it('shows placeholder-style instructions when input is empty', async () => {
    await browser.url('/');

    const $input = await $('#input-area');
    const $inputInstructions = await $input.$('.instructions');
    const $outputInstructions = await $('#output-area .instructions');

    // NOTE: `toHaveTextContaining()` does not seem to work right in Safari
    // when text is in the DOM but hidden (it should report false). Instead, we
    // directly test of whether the instructions elements are displayed.
    // Not as nice, but oh well.
    await expect($inputInstructions).toBeDisplayed();
    await expect($outputInstructions).toBeDisplayed();

    await $input.click();
    await browser.keys('convert me');

    await expect($inputInstructions).not.toBeDisplayed();
    await expect($outputInstructions).not.toBeDisplayed();
  });

  it('downloads the markdown when the button is clicked', async function () {
    if (browser.capabilities.browserName === 'Safari') {
      this.skip(
        "Test not supported in Safari - we can't choose the download directory."
      );
      return;
    }

    await browser.url('/');

    const $input = await $('#input');

    await $input.click();
    // Ideally, this would be `browser.keys([Key.Ctrl, 'b'])`, but only some
    // browsers automatically map basic formatting commands to the keyboard.
    await browser.execute(() => {
      document.execCommand('bold', false, null);
    });
    await browser.keys('convert me');

    const $download_button = await $('#download-button');
    await $download_button.click();

    const downloadDirectory = getTestTempDirectory(browser);
    const filePath = path.join(downloadDirectory, 'Converted Text.md');
    await waitForFileExists(filePath);

    const fileContents = await fs.readFile(filePath, 'utf-8');
    await expect(fileContents).toBe('**convert me**\n');
  });

  // TODO: test copy button (requires serving over HTTPS in some browsers)
});
