
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumPort: null,
  seleniumArgs: [],
  specs: ['spec.js'],
  multiCapabilities: [
    {'browserName': 'chrome'}
    // {'browserName': 'firefox'}
  ],
  baseUrl: 'http://localhost:8080',
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: false
  }
};






