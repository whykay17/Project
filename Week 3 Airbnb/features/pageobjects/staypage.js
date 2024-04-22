class stay {

    get reserve(){
        return $("//div[contains(@class,'_fz3zdn')]//button[contains(@type,'button')]")
    }

    get transText(){
        return $("//h1[contains(text(),'Translation on')]");
    }

    get transClose(){
        return $("//button[@aria-label='Close']")
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