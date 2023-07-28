import * as path from 'node:path';
import * as fs from 'node:fs';

/**
 * Get the absolute path a temporary directory that tests can use for working
 * with files and that test browsers are configured to download files to.
 * @param {string|{browserName: string}|{capabilities: {browserName: string}}} browser
 *        The name of the browser/test environment to get a temp directory for,
 *        or a Webdriver capabilities or browser object identifying the browser.
 * @returns {string}
 */
export function getTestTempDirectory(browser) {
  const browserName = browser?.capabilities?.browserName
    ?? browser?.browserName
    ?? browser;
  if (typeof browserName !== 'string') {
    throw new TypeError('The first argument must be a string or browser/capability object');
  }
  return path.join(global.tempDirectory, browserName.toLowerCase());
}

/**
 * Wait until a file exists or a timeout is hit before resolving
 */
// pulled from https://stackoverflow.com/a/47764403
// FIXME: use fs/promises API, see about making this a proper async function
export function waitForFileExists(filePath, timeout) {
  return new Promise(function (resolve, reject) {

    var timer = setTimeout(function () {
      watcher.close();
      reject(new Error('File did not exists and was not created during the timeout.'));
    }, timeout);

    fs.access(filePath, fs.constants.R_OK, function (err) {
      if (!err) {
        clearTimeout(timer);
        watcher.close();
        resolve();
      }
    });

    var dir = path.dirname(filePath);
    var basename = path.basename(filePath);
    var watcher = fs.watch(dir, function (eventType, filename) {
      if (eventType === 'rename' && filename === basename) {
        clearTimeout(timer);
        watcher.close();
        resolve();
      }
    });
  });
}
