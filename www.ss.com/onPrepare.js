reportsFolder = './test-reports/';
screenshotsFolder = './screenshots';

browser.ignoreSynchronization = true;
browser.driver.manage().window().maximize();

// HTML report
Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter"),
jasmineHtmlReporter = new Jasmine2HtmlReporter ({
                              savePath: reportsFolder,
                              screenshotsFolder: screenshotsFolder,
                              takeScreenshots: true,
                              takeScreenshotsOnlyOnFailures: true,
                              showStacktrace: true,
                              showPassed: true,
                              showSkippedCount: true,
                              consolidateAll: true
                          });
jasmine.getEnv().addReporter(jasmineHtmlReporter);

// XML report
var jasmineReporters = require('jasmine-reporters');
var junitReporter = new jasmineReporters.JUnitXmlReporter ({
                            consolidateAll: true,
                            savePath: reportsFolder + '/xml',
                            modifyReportFileName: function(generatedFileName, suite) {
                                                      return browserCapabilities.get('browserName') + '-' + generatedFileName + '-' + currentSpec.fullName;
                                                  }
                        });
jasmine.getEnv().addReporter(junitReporter);
