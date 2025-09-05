import compat from 'eslint-plugin-compat';
import globals from 'globals';
import js from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  {
    ignores: ['scratch.*', 'dist/**/*', 'coverage/**/*'],
  },

  js.configs.recommended,
  compat.configs['flat/recommended'],

  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    settings: {
      browsers:
        '> 0.5%, last 2 versions, Firefox ESR, node >= 20, not dead, not op_mini all',
      lintAllEsApis: true,
    },

    plugins: {
      '@stylistic/js': stylisticJs,
    },

    rules: {
      'curly': ['error', 'multi-line', 'consistent'],
      'eqeqeq': ['error', 'always', { null: 'ignore' }],
      '@stylistic/js/max-len': [
        'error',
        {
          code: 120,
          comments: 80,
          ignoreUrls: true,
          ignoreTemplateLiterals: true,
        },
      ],
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrors: 'none',
        },
      ],
    },
  },

  {
    files: ['scripts/**/*.js'],
    settings: {
      browsers: 'node >= 20',
    },
  },

  {
    files: ['test/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
  },

  {
    files: ['test/e2e/**/*.js'],
    settings: {
      browsers: 'node >= 20',
    },
  },

  {
    files: ['test/unit/**/*.js', 'test/support/**/*.js'],
    ignores: ['test/support/wdio-webpack-dev-server.js'],
    settings: {
      browsers:
        '> 0.5%, last 20 versions, Firefox ESR, not dead, not op_mini all',
    },
  },
];
