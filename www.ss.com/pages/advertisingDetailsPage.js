'use strict';

var Helpers = require('../tools/helpers.js');

var pageName = 'AdvertisingDetailsPage';
var AdvertisingDetailsPage = function() {

    // *************** LOCATORS
    // Ads controls
    this.addToFavorites = element(by.css('[id="a_fav"]'));

    // Attention alert
    this.alertModelDialog = element(by.css('[id="alert_dv"]'));
    this.alertOkButton = element(by.css('[id="alert_ok"]'));

    // *************** ACTIONS
    this.addAdsToFavorites = function() {
        Helpers.scrollElementIntoView(this.addToFavorites);
        Helpers.waitForElementBecomeClickable('Add To Favorites at ' + pageName, this.addToFavorites);
        this.addToFavorites.click();

        Helpers.waitForElementToBeVisible('Alert message at ' + pageName, this.alertModelDialog);
        this.alertOkButton.click();
    };
};

module.exports = new AdvertisingDetailsPage();
