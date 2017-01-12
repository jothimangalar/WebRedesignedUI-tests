
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
  specs: ['spec.js'],
  baseUrl: 'http://localhost:3000/',
  useAllAngular2AppRoots: true,
chromeDriver: 'node_modules/protractor/selenium/chromedriver.exe',

seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.40.0.jar',	

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
	  showColors:true,
    defaultTimeoutInterval: 99999999
  }
}; 
