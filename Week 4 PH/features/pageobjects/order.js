const { $ } = require('@wdio/globals')

const newOrder = "//button[@id='add-new-order-button']";
const sample = "//a[normalize-space()='Samples & Supplies Order']";

class order {

    async openOrder() {
        await $(newOrder).click();
        await $(sample).click();
    }

}

module.exports = new order();