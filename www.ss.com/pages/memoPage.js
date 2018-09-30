'use strict';

var Helpers = require('../tools/helpers.js');

var pageName = 'MemoPage';
var MemoPage = function() {

    // *************** LOCATORS
    // Ads controls
    this.favoriteAdsCaptionList = element.all(by.css('[class="am"]'));
    this.favoritesLink = element.all(by.css('[title="Favorites"]'));

    // *************** ACTIONS
    this.get = function() {
        browser.get(Helpers.baseUrl + '/en/favorites/');
    };

    this.getPresentAdsByName = function(adsName) {
        return this.favoriteAdsCaptionList.filter(function(row, index) {
            return row.getText().then(
                function(text){
                    return text == adsName;
                })
        });
    };
};

module.exports = new MemoPage();
