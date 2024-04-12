import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import Logins from 'C:/Project/features/pageobjects/testlogin.js';


Given(/^I am in the login page$/, async() => {
	browser.url("https://practicetestautomation.com/practice-test-login/");
});

When(/^I enter my username and password$/, async() => {
	await Logins.enterCred();
});

When(/^I click on Submit button$/, async() => {
	await Logins.pressSub();
});

Then(/^new page URL contains Congratulations$/, async() => {
	await expect(browser).toHaveUrl('https://practicetestautomation.com/logged-in-successfully/');
});
