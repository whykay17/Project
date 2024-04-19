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

    get transText(){
        return $("//h1[contains(text(),'Translation on')]");
    }

    get transClose(){
        return $("//button[@aria-label='Close']")
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
        windowHandles.reverse();
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
        await browser.pause(3000);
        if(await (this.transClose).isExisting() || await (this.transText).isDisplayed())
        {
            if((this.transClose).isClickable())
            {
                await this.transClose.click();
            }
        }
    }

    reserveClick = async() => {
        
        if((await this.reserve).isClickable()){
            await this.reserve.click();
        }
    }

}

module.exports = new stay();