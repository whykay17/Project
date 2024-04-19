class home{
    get findURL() {
        return 'https://www.airbnb.co.in/';
    }

    get locInput() {
        return $('//*[@id="bigsearch-query-location-input"]');
    }

     eurButton=async(location) =>{
        console.log(location);
        return $(`//span[contains(text(),"${location}")]/parent::*`);
    }

    get checkin() {
        return $("//td[@aria-disabled='false'][1]");
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

    eurSel=async(location) =>{
        await this.locInput.click();
        let btn=await this.eurButton(location);
        await btn.waitForClickable();
        await btn.click();
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