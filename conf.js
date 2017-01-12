
// An example configuration file.
exports.config = {
  directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['spec1.js'],
  baseUrl: 'http://localhost:3000/',
  useAllAngular2AppRoots: true,

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
	  showColors:true,
    defaultTimeoutInterval: 99999999
  }
}; 
