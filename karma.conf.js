//jshint strict: false
module.exports = function (config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'components/**/*.js',
      'view*/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-spec-reporter'
    ],

    // Valori validi 'spec', 'progress', 'dots',
    reporters: ['spec'],

    specReporter: {
      maxLogLines: 5,             // limit number of lines logged per test 
      suppressErrorSummary: true, // do not print error summary 
      suppressFailed: false,      // do not print information about failed tests 
      suppressPassed: false,      // do not print information about passed tests 
      suppressSkipped: true,      // do not print information about skipped tests 
      showSpecTiming: false,      // print the time elapsed for each spec 
      failFast: false             // test would finish with error when a first fail occurs.  
    },

    // Abilita output su console 
    client: {
      captureConsole: true
    },
    
    browserConsoleLogOptions: {
      terminal: true,
      level: ""      
    },
        
    logLevel: config.LOG_INFO
  });
};
