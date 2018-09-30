'use strict';

var pageObjects = '../pages/';
var tools       = require('../tools/helpers.js');

// Pages
var MainPage    = require(pageObjects + 'mainPage.js');
var MemoPage    = require(pageObjects + 'memoPage.js');
var EntertainmentPage  = require(pageObjects + 'entertainmentPage.js');
var FilterAdvertisingPage  = require(pageObjects + 'filterAdvertisingPage.js');
var AdvertisingDetailsPage = require(pageObjects + 'advertisingDetailsPage.js');

// Test data initialization
var tdEntertainmentCategories = tools.getTestData('ads.Entertainment-Categories');
var tdAdvertisingDetails = tools.getTestData('ads.dataset-01.AdvertisingDetails');

describe("E2E: Add advertising to the MEMO as a favourite.", function() {

    it('Open the main page.', function() {
        MainPage.get();
        // Done due to a specific of jasmine2-html-reporter, it marks all
        // steps without 'expect' as skipped.
        expect(true).toBe(true);
    });

    it('Open the entertainment page.', function() {
        MainPage.openEntertainmentCategoryScreen();

        let entertainmentCategoriesCount = Object.keys(tdEntertainmentCategories).length;
        expect(EntertainmentPage.getAmountOfCategories()).toEqual(entertainmentCategoriesCount);
    });

    it('Open the Hobby/Art Category page.', function() {
        EntertainmentPage.openHobbyArtCategory();
        expect(true).toBe(true);
    });

    it('Filter advertising by price range.', function() {
        let adsPriceRange = tdAdvertisingDetails["price_range"];
        FilterAdvertisingPage.filterAdsByPrice(adsPriceRange);
        expect(true).toBe(true);
    });

    it('Open the specific advertising page.', function() {
        let adsName = tdAdvertisingDetails["name_header"];
        FilterAdvertisingPage.openAdsByName(adsName);
        expect(true).toBe(true);
    });

    it('Add the advertising to Memo as favourite.', function() {
        AdvertisingDetailsPage.addAdsToFavorites();
        expect(true).toBe(true);
    });

    it('Open Memo screen.', function() {
        MainPage.openMemoScreen();
        expect(true).toBe(true);
    });

    it('Validate that advertising was added to Memo as favourite', function() {
        let adsName = tdAdvertisingDetails["name_header"];
        let foundAds = MemoPage.getPresentAdsByName(adsName);
        expect(foundAds.getText()).toContain(adsName);
    });
/*
    it('dummy, dummy, dummy...', function() {
        browser.sleep(2000);
    });
*/
});
