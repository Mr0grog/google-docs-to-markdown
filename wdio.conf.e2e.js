import * as fs from 'node:fs/promises';
import { config as base } from './wdio.conf.base.js';
import WebpackDevServerService from './test/support/wdio-webpack-dev-server.js';
import { getTestTempDirectory } from './test/support/utils.js';

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
