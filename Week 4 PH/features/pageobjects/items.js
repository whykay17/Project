const { $ } = require('@wdio/globals')

const lookup = "//div[@class='container']//button[@class='mat-focus-indicator mat-button mat-button-base']"
const topItemAdd = "//table[@class='catalog-table ng-star-inserted']/tr[2]/td[6]/button"
const paymentTab = "//button[@id='npo-payment-tab']"

class items {

    async addItem() {
        await $(lookup).click();
        await $(topItemAdd).click();
        await browser.pause(5000);
        await $(paymentTab).click();
    }

}

module.exports = new items();