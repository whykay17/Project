class home{
    get findURL() {
        return 'https://www.airbnb.co.in/';
    }

    get locInput() {
        return $('//*[@id="bigsearch-query-location-input"]');
    }

    get eurButton() {
        return $("//span[contains(text(),'Europe')]/parent::*");
    }

    get checkin() {
        return $("//div[@class='_nuyjria notranslate'][normalize-space()='30']");
    }

    get checkout() {
        return $("//div[@class='_1aj90y58 notranslate'][normalize-space()='2']");
    }

    get guests() {
        return $("//div[normalize-space()='Who']");
    }

    get adultPlus() {
        return $("//button[contains(@data-testid,'stepper-adults-increase-button')]");
    }

    get searchBtn() {
        return $('button[data-testid="structured-search-input-search-button"]');
    }

    eurSel=async() =>{
        await this.locInput.click();
        await this.eurButton.click();
    }

    dateSel=async() =>{
        await this.checkin.click();
        await this.checkout.click();
    }

    guestSel=async() =>{
        await this.guests.click();
        await this.adultPlus.click();
    }

    searchBtnClick=async() =>{
        await this.searchBtn.click();
    }
}

module.exports = new home();