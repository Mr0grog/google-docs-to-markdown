// Karma does not yet support ESM for the config file:
// https://github.com/karma-runner/karma/issues/3677
const path = require('node:path');

console.log(`JOINED: "${path.join(__dirname, "test/fixtures")}"`)

module.exports = function(config) {
  config.set({
    basePath: '',

    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ['mocha', 'webpack'],

    files: [
      // Some of these get pre-processed by Webpack, which will watch them, so
      // watching is turned off here.
      { pattern: 'lib/**/*.js', watched: false },
      { pattern: 'test/**/*.js', watched: false },

      // The `proxies` config makes these available at `/test/fixtures/*`.
      { pattern: 'test/fixtures/*', included: false, served: true }
    ],

    exclude: [
    ],

    preprocessors: {
      'lib/**/*.js': ['webpack'],
      'test/**/*.js': ['webpack']
    },

    // Serve fixtures from `/fixtures/` for ease of access. (Without this,
    // you'd need `/absolute/path/to/project/test/fixtures/*` to get them.)
    proxies: {
      "/fixtures/": "/base/test/fixtures"
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: [
      'Chrome',
      // 'Firefox',
      // 'Safari'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // How many *browsers* to run in parallel (not individual tests)
    concurrency: Infinity,

    webpack: {
      // resolve: {
      //   fallback: {
      //     path: require.resolve('path-browserify'),
      //   }
      // }
      module: {
        rules: [
          {
            test: /fixtures\/.*\.(html|md)$/,
            type: 'asset/source'
          }
        ]
      }
    },

    client: {
      mocha: {
        // Show Mocha's nicer, web reporter in Karma's debug.html.
        reporter: 'html',
      }
    }
  })
}
