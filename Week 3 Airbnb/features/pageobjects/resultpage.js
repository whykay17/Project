class results{
    get resTitle() {
        return 'Airbnb | Europe – Holiday Rentals & Places to Stay';
    }

    get farmStay() {
        return $("//div[contains(text(),'Farm stay')]/ancestor::div[3]");
    }

    get nextPage() {
        return $("//a[@aria-label='Next']")
    }

    topSel=async() => {
        while(!(await this.farmStay.isDisplayed()))
        {   await browser.pause(1000);
            (await this.nextPage).click();
        }
        await this.farmStay.click();
        await browser.pause(1000);
    }
}

module.exports = new results();
