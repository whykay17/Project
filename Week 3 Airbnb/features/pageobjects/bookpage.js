class booking{
    get tripText() {
        return $("//h2[normalize-space()='Your trip']");
    }

    checkText = async() => {
        return await this.tripText.isExisting();
    }
}

module.exports = new booking();