var defaultUrl = 'http://localhost:3000/';

exports.config = {
    host: '0.0.0.0',
    port: 4444,
    path: '/wd/hub',
    specs: [
        './selenium-tests/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 2,
        browserName: 'chrome'
      },
      // {
      //   maxInstances: 5,
      //   browserName: 'firefox'
      // }
    ],
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'silent',
    //
    // Enables colors for log output.
    coloredLogs: true,
    screenshotPath: './selenium-tests/errors/',
    baseUrl: process.env.URL || defaultUrl,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd'
    },
    // onPrepare: function (config, capabilities) {
    // },
    before: function (capabilities, specs) {
      var chai = require('chai');
      var webdriverio = require('webdriverio');
      var options = { desiredCapabilities: { browserName: 'chrome' } };

      global.URL = process.env.URL || defaultUrl;

      global.expect = chai.expect;
      global.client = webdriverio.remote(options);
      chai.Should();

      return client
        .init();
    },
    // beforeSuite: function (suite) {
    // },
    // beforeHook: function () {
    // },
    // afterHook: function () {
    // },
    // beforeTest: function (test) {
    // },
    // beforeCommand: function (commandName, args) {
    // },
    // afterCommand: function (commandName, args, result, error) {
    // },
    // afterTest: function (test) {
    // },
    // afterSuite: function (suite) {
    // },
    after: function (result, capabilities, specs) {
      return client.end();
    },
    // onComplete: function(exitCode) {
    // }
}
