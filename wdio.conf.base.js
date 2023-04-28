let capabilities = [
  {
    browserName: 'chrome',
    acceptInsecureCerts: true
    // If outputDir is provided WebdriverIO can capture driver session logs
    // it is possible to configure which logTypes to include/exclude.
    // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
    // excludeDriverLogs: ['bugreport', 'server'],
  },
  {
    browserName: 'firefox',
    acceptInsecureCerts: true
  },
  {
    browserName: 'safari',
    acceptInsecureCerts: true
  }
];

if (process.env.BROWSERS) {
  const names = process.env.BROWSERS.split(',').map(name => name.trim());
  capabilities = capabilities.filter(c => names.includes(c.browserName));
}

// Base Webdriver.io Configuration
// Full reference: https://webdriver.io/docs/configuration
export const config = {
  // Files
  specs: [
      './test/**/*.test.js'
  ],
  exclude: [],
  filesToWatch: [
    './lib/**/*.js',
    './test/support/**/*.js',
    './test/fixtures/**/*',
  ],
  injectGlobals: false,

  // Browsers/Capabilities
  capabilities,
  maxInstancesPerCapability: 1,

  // General Options
  runner: 'local',
  logLevel: 'info', // trace | debug | info | warn | error | silent
  outputDir: './logs/',
  bail: 0,
  baseUrl: '',

  // Default timeout for all waitFor* commands.
  waitforTimeout: 10_000,

  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120_000,

  // Default request retries count
  connectionRetryCount: 3,

  services: [
    'chromedriver',
    'geckodriver',
    'safaridriver',
  ],

  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
      ui: 'bdd',
      timeout: 60_000
  },
}
