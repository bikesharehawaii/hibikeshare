var webpackCfg = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    files: [
      './public/app/test/loadtests.js'
    ],
    port: 8080,
    captureTimeout: 60000,
    frameworks: ['phantomjs-shim', 'mocha', 'chai'],
    client: {
      mocha: {}
    },
    singleRun: true,
    reporters: ['mocha'],
    preprocessors: {
      './public/app/test/loadtests.js': ['webpack', 'sourcemap']
    },
    webpack: webpackCfg,
    webpackServer: {
      noInfo: true
    }
  });
};
