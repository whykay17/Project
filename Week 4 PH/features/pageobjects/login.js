const { $ } = require('@wdio/globals')

const loginLink = "https://test-cc.princesshouse.com/";
const userID = "//input[@id='signInName']";
const username = "JRojas"
const passID = "//input[@id='password']";
const password = "Passw0rd@123$"
const submit = "//button[@id='next']"

class LoginPage {

    async openLink() {
        await browser.url(loginLink);
        await browser.maximizeWindow();
        await browser.pause(3000);
    }

    async enterLogin() {
        await $(submit).waitForClickable();
        await $(userID).setValue(username);
        await $(passID).setValue(password);
        await $(submit).click();
    }

}

module.exports = new LoginPage();
