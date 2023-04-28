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
  ]
};
