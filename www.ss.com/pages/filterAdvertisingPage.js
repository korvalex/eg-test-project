'use strict';

var Helpers = require('../tools/helpers.js');

var pageName = 'FilterAdvertisingPage';
var FilterAdvertisingPage = function() {

    // *************** LOCATORS
    // Filter fields
    this.priceMinValue = element(by.css('[id="f_o_8_min"]'));
    this.priceMaxValue = element(by.css('[id="f_o_8_max"]'));
    this.submitButton = element(by.css('[type="submit"]'));

    // Filtered Results table
    this.filteredAdsCaptionList = element.all(by.css('[class="am"]'));

    // *************** ACTIONS
    this.get = function(pathToSpecificCategory) {
        browser.get(Helpers.baseUrl + pathToSpecificCategory);
    };

    this.filterAdsByPrice = function(priceRange) {
        Helpers.waitForElementBecomeClickable('Filter field at ' + pageName, this.priceMinValue);
        this.priceMinValue.sendKeys(priceRange["min"]);
        this.priceMaxValue.sendKeys(priceRange["max"]);
        this.submitButton.click();
    };

    this.openAdsByName = function(adsName) {
        this.filteredAdsCaptionList.filter(function(row, index) {
            return row.getText().then(
                function(text){
                    return text == adsName;
                })
        }).each(function(row) {
            row.click();
        });
    };
};

module.exports = new FilterAdvertisingPage();
