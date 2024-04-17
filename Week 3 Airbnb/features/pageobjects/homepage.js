class home{
    get findURL() {
        return 'https://www.airbnb.co.in/';
    }

    get locInput() {
        return $('//*[@id="bigsearch-query-location-input"]');
    }

    get eurButton() {
        return $("//div[contains(@class,'dttmvf5 atm_9s_11p5wf0 atm_n5_i2wt44 atm_d7_idpfg4 atm_ks_15vqwwr atm_dz_zk4kx0 atm_e0_988hr2 dir dir-ltr')]//div[2]//button[1]");
    }

    get checkin() {
        return $("//div[@class='_nuyjria notranslate'][normalize-space()='30']");
    }

    get checkouBtn() {
        return $("//div[@class='p1m42al0 atm_c8_km0zk7 atm_g3_18khvle atm_fr_1m9t47k atm_cs_6adqpa atm_ks_15vqwwr atm_sq_1l2sidv atm_vy_1osqo2v p1t4vwjw atm_7l_1jsbn00 dir dir-ltr']");
    }

    get checkout() {
        return $("//div[@class='_1aj90y58 notranslate'][normalize-space()='2']");
    }

    get guests() {
        return $("//div[normalize-space()='Who']");
    }

    get adultPlus() {
        return $("//button[contains(@data-testid,'stepper-adults-increase-button')]//span[contains(@class,'i98ho2o atm_e2_qslrf5 atm_vy_qslrf5 atm_l8_14y27yu dir dir-ltr')]//*[name()='svg']");
    }

    get searchBtn() {
        return $('button[data-testid="structured-search-input-search-button"]');
    }

    eurSel=async() =>{
        await this.locInput.click();
        await this.eurButton.click();
        await browser.pause(2000);
    }

    dateSel=async() =>{
        await this.checkin.click();
        // await this.checkouBtn.click();
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