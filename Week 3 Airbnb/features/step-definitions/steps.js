const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');

const homePage = require('../pageobjects/homepage.js');
const resPage = require('../pageobjects/resultpage.js');
const stayPage = require('../pageobjects/staypage.js');
const bookPage = require('../pageobjects/bookpage.js');

Given(/^I am in homepage$/, async() => {
	await browser.url(homePage.findURL);
    await browser.pause(5000);
});

When(/^I select drop down and select europe$/, async() => {
    await homePage.eurSel();
});

When(/^I select dates for travel$/, async() => {
    await homePage.dateSel();
});

When(/^I add one adult visiting$/, async() => {
    await homePage.guestSel();
    browser.pause(5000);
});

When(/^I click on search button$/, async() => {
    await homePage.searchBtnClick();
});

Then(/^I get redirected to results page$/, async() => {
	await expect(browser).toHaveTitle(resPage.resTitle);
});

When(/^I click on top stay option$/, async() => {
	await resPage.topSel();
});

Then(/^I get name of top stay page$/, async() => {
    
    await stayPage.tabSwitch();
    await stayPage.transCheck();
    await expect(browser).toHaveTitle(expect.stringContaining('- Airbnb'))
    
});

When(/^I click on reserve button$/, async() => {
	await stayPage.reserveClick();
});

Then(/^I get redirected to reservation page$/, async() => {
	await bookPage.checkText();
});
