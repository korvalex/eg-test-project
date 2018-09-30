'use strict';

var TestDataReader = require('./testDataReader.js')

var Helpers = function() {
    this.baseUrl = browser.baseUrl;
    this.testDataDirectory = browser.params.resources.testDataDirectory;

    this.getTestData = function(testName) {
      return TestDataReader.read(testName, this.testDataDirectory);
    }

    this.initiateNonAngularMode = function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
    };

    this.waitForElementToBeVisible = function (elementName, element) {
        browser.wait(protractor.ExpectedConditions.visibilityOf(element),
            browser.params.timeouts.elementToBeVisible, 'Element [' + elementName + '] not found or not visible!');
    };

    this.waitForElementBecomeClickable = function (elementName, element) {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(element),
            browser.params.timeouts.elementToBeClickable, 'Element [' + elementName + '] not found or not clickable!');
    };

    this.selectDropdownByValue = function(elementName, element, value)  {
        this.waitForElementBecomeClickable(elementName, element);
        element.sendKeys(value);
    };

    this.scrollElementIntoView = function(element) {
        browser.executeScript(function(element) {
            element.scrollIntoView();
        }, element.getWebElement());
    };
};

module.exports = new Helpers();
