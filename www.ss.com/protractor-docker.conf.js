exports.config = {
    // Use direct connection working with chrome browser
    directConnect: true,
    chromeDriver: '/usr/bin/chromedriver',

    // Test App configuration
    baseUrl: 'https://www.ss.com',

    params: {
        timeouts: {
            elementToBeClickable: 3000,
            elementToBeVisible: 3000
        },
        resources: {
            testDataDirectory: '../resources'
        }
    },

    // Browser specs
    multiCapabilities: [{
        browserName:    'chrome',
        chromeOptions: {
            'args': ['no-sandbox', 'headless', 'disable-gpu']
        }
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
