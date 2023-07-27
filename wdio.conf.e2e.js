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
  // FIXME: move to base configuration, use an async function and fs/promises API
  onPrepare: function (_config, capabilities) {
    if (fs.existsSync(global.tempDirectory)) {
      fs.rmSync(global.tempDirectory, {
        recursive: true,
        force: true
      });
    }
    fs.mkdirSync(global.tempDirectory);

    // Ensure each browser has a temporary downloads directory to work with.
    for (const capability of capabilities) {
      const downloadsPath = global.downloadsPaths[capability.browserName.toLowerCase()];
      if (downloadsPath && !fs.existsSync(downloadsPath)){
          fs.mkdirSync(downloadsPath);
      }
    }
  }
};
