const { $ } = require('@wdio/globals')

const addPay = "//button[@id='add-new-payment']";
const selPay = "/html/body/div[5]/div[2]/div/div/div/a";
const creditText = "//h1[normalize-space()='Add Credit or debit card payment']"
const useAddress = "//label[@for='mat-checkbox-1-input']//span[@class='mat-checkbox-inner-container']";
const dueAmount = "//div[@class='value balance-value']";
const fillAmount = "//input[@id='mat-input-1']";
const iframe1=$("//iframe[@id='braintree-hosted-field-cardholderName']");
const iframe2=$("//iframe[@id='braintree-hosted-field-number']");
const iframe3=$("//iframe[@id='braintree-hosted-field-expirationDate']");
const iframe4=$("//iframe[@id='braintree-hosted-field-cvv']");
const cardName = "//input[@name='cardholder-name' and @data-braintree-name='cardholderName']";
const username = "Santhosh Philip";
const cardNo = "//input[@name='credit-card-number' and @data-braintree-name='number']";
const userNo = "4111111111111111";
const expLoc = "//input[@name='expiration' and @data-braintree-name='expirationDate']";
const expDate = "1230";
const cvvLoc = "//input[@name='cvv' and @data-braintree-name='cvv']";
const cvv = "123";
const submitPay = "//button[@id='add-payment-modal-add']";
const addedText = "//td[normalize-space()='Added']";


class paymentSel {

    async paySel() {
        await $(addPay).waitForClickable();
        await $(addPay).click();
        await $(selPay).click();
    }

    async payCheck() {
        await browser.pause(3000);
        if(await $(creditText).isDisplayed)
            return true
        else
            return false
    }

    async payAmount() {
        await $(useAddress).click();
        var x=await $(dueAmount).getText();
        x=x.substring(1);
        await $(fillAmount).setValue(x);
    }

    async fillCard() {
        await browser.pause(10000);
        await browser.switchToFrame(1);
        await $(cardName).setValue(username);
        await browser.switchToFrame(null);
        await browser.switchToFrame(2);
        await $(cardNo).setValue(userNo);
        await browser.switchToFrame(null);
        await browser.switchToFrame(3);
        await $(expLoc).setValue(expDate);
        await browser.switchToFrame(null);
        await browser.switchToFrame(4);
        await $(cvvLoc).setValue(cvv);
        await browser.switchToFrame(null);
        (await $(submitPay)).click();
    }

    async finalCheck() {
        await $(addedText).isDisplayed();
    }
}

module.exports = new paymentSel();