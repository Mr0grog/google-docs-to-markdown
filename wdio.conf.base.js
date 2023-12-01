import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getTestTempDirectory } from './test/support/utils.js';

const IS_CI = /^(true|1)$/i.test(process.env.CI?.trim() || '');
if (IS_CI) {
  console.warn('RUNNING WEBDRIVERIO IN CI');
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
global.tempDirectory = path.join(__dirname, 'temp');

// Configuration for all testable browsers.
let capabilities = [
  {
    'browserName': 'chrome',
    'browserVersion': 'stable',
    'acceptInsecureCerts': true,
    'goog:chromeOptions': {
      prefs: {
        'directory_upgrade': true,
        'prompt_for_download': false,
        'download.default_directory': getTestTempDirectory('chrome')
      },
    }
  },
  {
    'browserName': 'firefox',
    'acceptInsecureCerts': true,
    'moz:firefoxOptions': {
      // For detailed descriptions of Firefox prefs, see:
      // - http://kb.mozillazine.org/About:config_entries
      // - https://searchfox.org/mozilla-central/source/modules/libpref/init/all.js
      prefs: {
        // Don't show a dialog.
        'browser.download.useDownloadDir': true,
        // Use the dir set below.
        'browser.download.folderList': 2,
        // Only `browser.download.dir` is really required, but set all the
        // relevant download directory variables just in case.
        'browser.download.dir': getTestTempDirectory('firefox'),
        'browser.download.downloadDir': getTestTempDirectory('firefox'),
        'browser.download.defaultFolder': getTestTempDirectory('firefox'),
        'browser.download.lastDir': getTestTempDirectory('firefox'),
      }
    }
  },
  {
    browserName: 'safari',
    acceptInsecureCerts: true,
    // There's no clear way to set the download dir in safaridriver. :(
    // Any download-related tests should probably be skipped on Safari.
  }
];

if (process.env.BROWSERS) {
  const names = process.env.BROWSERS.split(',').map(name => name.trim());
  capabilities = capabilities.filter(c => names.includes(c.browserName));
}

// Base Webdriver.io Configuration
// Full reference: https://webdriver.io/docs/configuration
export const config = {
  // Files
  specs: [
    './test/**/*.test.js'
  ],
  exclude: [],
  filesToWatch: [
    './lib/**/*.js',
    './test/support/**/*.js',
    './test/fixtures/**/*',
  ],
  injectGlobals: false,

  // Browsers/Capabilities
  capabilities,
  // Safaridriver only supports 1 instance. `maxInstancesPerCapability: 1` seems
  // to work locally, but not in CI.
  maxInstances: IS_CI ? 1 : 100,
  maxInstancesPerCapability: 1,

  // General Options
  runner: 'local',
  logLevel: 'info', // trace | debug | info | warn | error | silent
  outputDir: './logs/',
  bail: 0,
  baseUrl: '',

  // Default timeout for all waitFor* commands.
  waitforTimeout: 10_000,

  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120_000,

  // Default request retries count
  connectionRetryCount: 3,

  services: [],

  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60_000
  },

  async onPrepare (_config, capabilities) {
    // Ensure we have a clean temp directory.
    await fs.rm(global.tempDirectory, { recursive: true, force: true });
    await fs.mkdir(global.tempDirectory);

    // And a subdirectory for each test environment -- they run in parallel,
    // so need their own isolated space to play in.
    for (const capability of capabilities) {
      const browserDirectory = getTestTempDirectory(capability);
      await fs.rm(browserDirectory, { recursive: true, force: true });
      await fs.mkdir(browserDirectory);
    }
  }
};
