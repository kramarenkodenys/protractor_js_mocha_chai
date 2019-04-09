exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect : true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["--start-fullscreen" ]
        }
    },

    // Framework to use. Jasmine is recommended.
    framework: 'mocha',
    mochaOpts: {
        timeout: 9000
    },

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs:['specs/*.js']
};
