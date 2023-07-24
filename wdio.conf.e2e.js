import * as path from 'node:path';
import * as fs from 'node:fs';
import { fileURLToPath } from 'url';

import { config as base } from './wdio.conf.base.js';
import WebpackDevServerService from './test/support/wdio-webpack-dev-server.js';

// shim __dirname since we're in an ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
global.downloadDir = path.join(__dirname, 'tempDownload');

export const config = {
  ...base,
  runner: 'local',
  specs: [
    './test/e2e/**/*.test.js'
  ],
  baseUrl: WebpackDevServerService.getServerUrl(),
  services: [
    ...base.services,
    [WebpackDevServerService, {}]
  ],
  // chrome configuration for download testing
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      prefs: {
        'directory_upgrade': true,
        'prompt_for_download': false,
        'download.default_directory': downloadDir
      },
      args: [
        'headless',
        'disable-gpu'
      ]
    }
  },
  {
    browserName: 'firefox'
  },
  {
    browserName: 'safari'
  }],
  onPrepare: function (config, capabilities) {
    // make sure download directory exists
    if (!fs.existsSync(downloadDir)){
        // if it doesn't exist, create it
        fs.mkdirSync(downloadDir);
    }
  },
  onComplete: function() {
    console.log(downloadDir)
    fs.rmSync(downloadDir, {
      recursive: true,
      force: true
    });
  }
};
