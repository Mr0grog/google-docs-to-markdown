import { AssertionError } from 'node:assert';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

/**
 * Get the absolute path a temporary directory that tests can use for working
 * with files and that test browsers are configured to download files to.
 * @param {string|{browserName: string}|{capabilities: {browserName: string}}} browser
 *        The name of the browser/test environment to get a temp directory for,
 *        or a Webdriver capabilities or browser object identifying the browser.
 * @returns {string}
 */
export function getTestTempDirectory(browser) {
  const browserName =
    browser?.capabilities?.browserName ?? browser?.browserName ?? browser;
  if (typeof browserName !== 'string') {
    throw new TypeError(
      'The first argument must be a string or browser/capability object'
    );
  }
  return path.join(global.tempDirectory, browserName.toLowerCase());
}

/**
 * Wait for a file to exist, or reject with an error after timing out.
 * @param {string} filePath
 * @param {number} [timeout]
 * @returns {Promise<void>}
 */
export async function waitForFileExists(filePath, timeout = 5_000) {
  const parentPath = path.dirname(filePath);
  const basename = path.basename(filePath);

  // Start watching first to eliminate any race conditions.
  const aborter = new AbortController();
  const watcher = fs.watch(parentPath, { signal: aborter.signal });
  const timer = setTimeout(() => {
    aborter.abort(
      new AssertionError({
        message: `File did not exist at ${filePath} after ${timeout} ms`,
      })
    );
  }, timeout);

  // Check whether the file already exists and stop watching if so.
  try {
    await fs.access(filePath, fs.constants.F_OK);
    aborter.abort('File already exists');
    return;
  } catch (_error) {
    try {
      for await (const { eventType, filename } of watcher) {
        if (eventType === 'rename' && filename === basename) {
          return;
        }
      }
    } catch (error) {
      // The AbortError you get from watch() is uninformative, so unwrap its
      // cause (if present) and throw that instead.
      throw error.cause || error;
    }
  } finally {
    clearTimeout(timer);
  }
}
