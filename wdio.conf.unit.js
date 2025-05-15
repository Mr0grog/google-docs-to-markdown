import { defineConfig } from '@wdio/config';
import { config as base } from './wdio.conf.base.js';

export const config = defineConfig({
  ...base,
  runner: 'browser',
  specs: ['./test/unit/**/*.test.js'],
});
