import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';

import loginPage from '../pageobjects/login.page.js';



Given(/^I am in the login page$/, async () => {
    await browser.url(loginPage.findURL);
});

When(/^I enter my username and password$/, async () => {
    await browser.pause(2000);
    await loginPage.enterCred("student", "Password123");
});

When(/^I click on Submit button$/, async () => {
    await browser.pause(6000);
    await loginPage.pressSub();
});

Then(/^I am logged in successfully$/, async () => {
    const text=$('//*[text()="Logged In Successfully"]');
    await expect(text).toHaveText("Logged In Successfully");
    }, 
    );