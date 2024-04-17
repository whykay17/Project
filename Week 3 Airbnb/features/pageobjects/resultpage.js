class results{
    get resTitle() {
        return 'Airbnb | Europe – Holiday Rentals & Places to Stay';
    }

    get topStay() {
        return $('//*[@id="site-content"]/div/div[2]/div/div/div/div/div[1]/div[1]/div/div[2]/div/div/div/div/div/div[1]/div/div/div[2]/div/div/div/div/a[1]');
    }

    topSel=async() => {
        await this.topStay.click();
    }
}

module.exports = new results();
