'use strict';

var Helpers = require('../tools/helpers.js');

var pageName = 'EntertainmentPage';
var EntertainmentPage = function() {

    // *************** LOCATORS
    this.hobbyArtLink = element(by.css('[id="ahc_75263"]'));
    this.categoryHeadList = element.all(by.css('[class="category_head"]'));

    // *************** ACTIONS
    this.get = function() {
        browser.get(Helpers.baseUrl + '/en/entertainment/');
    };

    this.openHobbyArtCategory = function() {
        Helpers.waitForElementBecomeClickable('Hobby/Art link at ' + pageName, this.hobbyArtLink);
        this.hobbyArtLink.click();
    };

    this.getAmountOfCategories = function() {
        Helpers.waitForElementToBeVisible('Category head at ' + pageName, this.categoryHeadList.first());
        return this.categoryHeadList.count();
    };
};

module.exports = new EntertainmentPage();
