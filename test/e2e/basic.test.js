import { setTimeout } from 'node:timers/promises';
import { browser, $, expect } from '@wdio/globals';

describe('Basic functionality', () => {
  it('should convert input and display in output area', async () => {
    await browser.url('/');

    const $input = await $('#input');
    const $output = await $('#output');

    await $input.click();
    await setTimeout(100);
    // Ideally, this would be `browser.keys([Key.Ctrl, 'b'])`, but only some
    // browsers automatically map basic formatting commands to the keyboard.
    await browser.execute(() => {
      document.execCommand('bold', false, null);
    });
    await browser.keys('hello');

    await expect($output).toHaveValue('**hello**');
  });

  // TODO: test pasting

  it('shows placeholder-style instructions when input is empty', async () => {
    await browser.url('/');

    const $input = await $('#input-area');
    const $output = await $('#output-area');

    await expect($input).toHaveTextContaining('Paste Google Docs text here');
    await expect($output).toHaveTextContaining('and get your Markdown here');

    await $input.click();
    await browser.keys('hello');

    await expect($input).not.toHaveTextContaining('Paste Google Docs text here');
    await expect($output).not.toHaveTextContaining('and get your Markdown here');
  });

  // TODO: test copy button (requires serving over HTTPS in some browsers)
});
