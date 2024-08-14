import { config as base } from './wdio.conf.base.js';
import WebpackDevServerService from './test/support/wdio-webpack-dev-server.js';

export const config = {
  ...base,
  runner: 'local',

  // Safari seems to have particular issues with automating user interaction in
  // parallel with other browsers, so only run one browser at a time for e2e.
  maxInstances: 1,

  specs: ['./test/e2e/**/*.test.js'],
  baseUrl: WebpackDevServerService.getServerUrl(),
  services: [...base.services, [WebpackDevServerService, {}]],
};
