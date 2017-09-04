//jshint strict: false
exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    browserName: 'chrome',
    // chromeOptions: {
    //     mobileEmulation: {
    //         deviceName: 'Galaxy S5'
    //     }
    // },

    // allows different specs to run in parallel.
    // If this is set to be true, specs will be sharded by file
    // (i.e. all files to be run by this set of capabilities will run in parallel).
    // Default is false.
    //shardTestFiles: true,

    // Maximum number of browser instances that can run in parallel for this
    // set of capabilities. This is only needed if shardTestFiles is true.
    // Default is 1.
    //maxInstances: 2,

    allScriptsTimeout: 20000,
  },
  
  specs: [
    'e2e-tests/*.spec.js'
  ],

  //multiCapabilities: {
  //  'browserName': 'chrome'
  //},

  //baseUrl: 'http://localhost:8000/',

  //framework: 'jasmine',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true
  },

  onPrepare: function () {
    var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    // add jasmine spec *
    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'all' }));
    //browser.driver.get('http://localhost:8000');
  }

};
