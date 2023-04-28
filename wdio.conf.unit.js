import { config as base } from './wdio.conf.base.js';

export const config = {
  ...base,
  runner: 'browser',
  specs: [
    './test/unit/**/*.test.js'
  ],
};
