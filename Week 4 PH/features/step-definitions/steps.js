const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const login = require('../pageobjects/login.js');
const home = require('../pageobjects/home.js');
const order = require('../pageobjects/order.js');
const newOrder = require('../pageobjects/neworder.js');
const items = require('../pageobjects/items.js');
const payment = require('../pageobjects/paymentsel.js');


Given(/^I am on the login page$/, async() => {
	await login.openLink();
});

When(/^I login with username and password$/, async() => {
	await login.enterLogin();
});

Then(/^I log into PH home$/, async() => {
	await home.isLogin()
});

When(/^I go to Orders and select sample and supplies order$/, async() => {
	await home.orderClick();
    await order.openOrder();
});

When(/^I fill out all information and create order$/, async() => {
	await newOrder.openOrder();
});

Then(/^I select all items and proceed to payment$/, async() => {
	await items.addItem();
    await payment.paySel();
	await payment.payCheck();
});

Then(/^I fill out payment details$/, async() => {
	await payment.payAmount();
	await payment.fillCard();
});

Then(/^The payment gets added$/, async() => {
	await payment.finalCheck();
});
