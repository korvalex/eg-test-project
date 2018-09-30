'use strict';

var pageObjects = '../pages/';
var tools       = require('../tools/helpers.js');

// Pages
var MainPage    = require(pageObjects + 'mainPage.js');
var MemoPage    = require(pageObjects + 'memoPage.js');

describe("FUNC: [Main Menu] - Validate Main Menu items.", function() {

    it('Validate the Memo menu item.', function() {
        MainPage.get();
        expect(MainPage.MemoMenuItem.isPresent()).toBeTruthy();
        expect(MainPage.MemoMenuItem.getText()).toEqual('Memo');
    });

    it('Validate the Memo screen opens.', function() {
        MainPage.get();
        MainPage.openMemoScreen();
        expect(MemoPage.favoritesLink.isPresent()).toBeTruthy();
        expect(MemoPage.favoritesLink.getText()).toMatch('Favorites');
    });

    // ADD: More functional tests here...

/*
    it('dummy, dummy, dummy...', function() {
        browser.sleep(2000);
    });
*/
});
