import * as fs from 'node:fs';

import { config as base } from './wdio.conf.base.js';
import WebpackDevServerService from './test/support/wdio-webpack-dev-server.js';

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
  onPrepare: function (config, capabilities) {
    // make sure download directory exists
    if (!fs.existsSync(global.downloadDir)){
        // if it doesn't exist, create it
        fs.mkdirSync(global.downloadDir);
    }
  },
  onComplete: function() {
    console.log(global.downloadDir)
    fs.rmSync(global.downloadDir, {
      recursive: true,
      force: true
    });
  }
};
