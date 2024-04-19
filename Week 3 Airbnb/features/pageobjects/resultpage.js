class results{
    resTitle=async(location) => {
        return `Airbnb | ${location} – Holiday Rentals & Places to Stay`;
    }

    farmStay=async(type) => {
        return $(`//div[contains(text(),'${type}')]/ancestor::div[3]`);
    }

    get nextPage() {
        return $("//*[@aria-label='Next']")
    }

    get nextPageButton() {
        return $("//*[@aria-label='Next']")
    }

    titleCheck=async(location) => {
        let title=await this.resTitle(location);
        await expect(browser).toHaveTitle(title);
    }

    topSel=async(type) => {
        let x= await this.farmStay(type);
        while(!(await x.isDisplayed()))
        {   await browser.pause(1000);
            (await this.nextPage).click();
        }
        await x.waitForClickable();
        await x.click();
        await browser.pause(1000);
    }

    finalCheck= async() => {
        if(!(await this.nextPageButton.isClickable()))
            return true;
    }
}

module.exports = new results();
