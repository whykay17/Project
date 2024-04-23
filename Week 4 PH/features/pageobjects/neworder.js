const { $ } = require('@wdio/globals')

const createOrder = "//*[@id='npo-finish']";

class newOrder {

    async openOrder() {
        await $(createOrder).click();
    }

}

module.exports = new newOrder();