exports.config = {
    // Use direct connection working with chrome browser
    directConnect: true,

    // Test App configuration
    baseUrl: 'https://www.ss.com',

    params: {
        timeouts: {
            elementToBeClickable: 2000,
            elementToBeVisible: 2000
        },
        resources: {
            testDataDirectory: '../resources'
        }
    },

    // Browser specs
    multiCapabilities: [{
        browserName:    'chrome'
    }],

    // Jasmine specs
    framework: 'jasmine2',
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 9000
    },

    suites: {
        e2e_suite:  './use-cases/**/addAdvertisingToMEMO.js',
        func_suite: './func-tests/**/validateMainScreens.js',
        run_all: [
                    './use-cases/**/*.js',
                    './func-tests/**/*.js'
        ]
    },

    onPrepare: 'onPrepare.js'
};
