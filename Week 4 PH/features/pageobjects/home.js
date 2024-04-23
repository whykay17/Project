const { $ } = require('@wdio/globals')

const flag = "//img[@class='country-flag']";
const orders = "//a[@id='side-nav-orders']"

class home {

    async isLogin() {
        await $(flag).isDisplayed();
    }

    async orderClick() {
        await $(orders).click();
    }

}

module.exports = new home();