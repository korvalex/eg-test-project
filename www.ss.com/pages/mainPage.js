'use strict';

var Helpers = require('../tools/helpers.js');

var pageName = 'MainPage';
var MainPage = function() {

    // *************** LOCATORS
    // Head Menu
    this.MemoMenuItem = element(by.css('[href="/en/favorites/"]'));
    this.SearchMenuItem = element(by.css('[href="/en/search/"]'));
    this.SubmitMenuItem = element(by.css('[href="/en/new/"]'));
    this.MyMessagesMenuItem = element(by.css('[href="/en/login/"]'));
    // Categories
    this.entertainmentCategoryLink = element(by.css('[title="Announcements Entertainment"]'));

    // *************** ACTIONS
    this.get = function() {
        browser.get(Helpers.baseUrl + '/en');
    };

    this.openEntertainmentCategoryScreen = function() {
        Helpers.waitForElementBecomeClickable('Entertainment Category link at ' + pageName, this.entertainmentCategoryLink);
        this.entertainmentCategoryLink.click();
    };

    this.openMemoScreen = function() {
        Helpers.waitForElementBecomeClickable('Memo link at ' + pageName, this.MemoMenuItem);
        this.MemoMenuItem.click();
    };

    this.openSearchScreen = function() {
        Helpers.waitForElementBecomeClickable('Search link at ' + pageName, this.SearchMenuItem);
        this.SearchMenuItem.click();
    };
    this.openSubmitScreen = function() {
        Helpers.waitForElementBecomeClickable('Submit link at ' + pageName, this.SubmitMenuItem);
        this.SubmitMenuItem.click();
    };
    this.openMyMessagesScreen = function() {
        Helpers.waitForElementBecomeClickable('Memo link at ' + pageName, this.MyMessagesMenuItem);
        this.MyMessagesMenuItem.click();
    };
};

module.exports = new MainPage();
