class stay {
    get stayNameid(){
        return $('//*[@id="site-content"]/div/div[1]/div[3]/div/div[1]/div/div[1]/div/div/div/section/div[1]/h2');
    }

    get priceID(){
        return $("//div[contains(@class,'_1k1ce2w')]//div//span[contains(@class,'_1y74zjx')]");
    }

    get reserve(){
        return $("//div[contains(@class,'_fz3zdn')]//button[contains(@type,'button')]")
    }

    get transClose(){
        return $("/html/body/div[9]/div/div/section/div/div/div[2]/div/div[1]/button")
    }

    stayName = async() => {
        var x = (await this.stayNameid).getText();
        var y = (await this.priceID).getText
        console.log(x);
        console.log(y);
    }

    tabSwitch = async() => {
        const originalWindowHandle = await browser.getWindowHandle();
        const windowHandles = await browser.getWindowHandles();
        let newWindowHandle;
        for (const handle of windowHandles) {
            if (handle !== originalWindowHandle) {
                newWindowHandle = handle;
                break;
            }
        }

        await browser.switchToWindow(newWindowHandle);
    }

    transCheck = async() => {
        if((this.transClose).isExisting())
        {
            await this.transClose.click();
        }
    }

    reserveClick = async() => {
        await this.reserve.click();
    }

}

module.exports = new stay();