import { expect } from '@playwright/test'

export class CareersPage {
    constructor(page) {
        this.page = page;
        this.openPositionsURL = 'https://systemverification.com/en/careers/open-postions/';
        this.careersPage = '//*[@id="menu-item-3439"]/a';
        this.OpenPositionsPage =  '//*[@id="menu-item-4652"]/a'
        this.jobItemsLocator = "//tr[@class='job__items_post' and not(@style='display: none;')]/td/span[contains(@class, 'jobs__items-label') and contains(text(), 'Location:')]/following-sibling::text()"
        this.stockholmJobLocator = "//tr[@class='job__items_post' and @data-location='stockholm']//span[@class='jobs__items-label' and contains(text(), 'Location:')]/following-sibling::text()";
    }

    navigateToCareersPage = async () => {
        await this.page.locator(this.careersPage).click();
        await this.page.locator(this.OpenPositionsPage).click();
    }

    async verifyCareersURL() {
        expect(this.page.url()).toBe(this.openPositionsURL);
    }

    async selectAndReturnRandomLocation() {
        const locationSelect = this.page.locator('select.form-control.job_location_filter');
        const optionsCount = await locationSelect.locator('option').count();
        console.log(optionsCount)
        const options = await locationSelect.locator('option').all();
        const optionsText = await Promise.all(options.map(option => option.textContent()));
        let randomOptionIndex = Math.floor(Math.random() * optionsText.length);
        // Ensure the first option is not selected
        if (randomOptionIndex === 0) {
            randomOptionIndex = 1;
        }
        await locationSelect.selectOption({ index: randomOptionIndex });
        const selectedOption = optionsText[randomOptionIndex];
        return selectedOption ? selectedOption.trim() : '';
    }

    async verifyLocationMatchesSelectedOption(selectedOption) {
        //const jobItems = await this.page.locator("//tr[@class='job__items_post' and not(@style='display: none;')]/td/span[contains(@class, 'jobs__items-label') and contains(text(), 'Location:')]/following-sibling::text()");
        const jobItems = this.page.locator(this.jobItemsLocator);
        console.log('jobItems: ' + jobItems);
        const jobItemsCount = await this.page.locator(this.jobItemsLocator).count();
        console.log('jobItemsCount: ' + jobItemsCount);
        console.log('selectedOption: ' + selectedOption);
        for (let i = 0; i < jobItemsCount; i++) {
            const location = (await jobItems.nth(i).textContent()).trim();
            console.log('LOCATION: ' + location);
            if (location.includes('Location:' + selectedOption)) {
                console.log(`Location ${location} matches the selected option ${selectedOption}`);
            } else {
                console.error(`Location ${location} does not match the selected option ${selectedOption}`);
            }
        }
    }    
    
   /*
    async verifyLocationMatchesSelectedOption(selectedOption) {
        const jobItems = this.page.locator(this.stockholmJobLocator);
        const jobItemsCount = await jobItems.count();
        console.log('jobItemsCount: ' + jobItemsCount);
        for (let i = 0; i < jobItemsCount; i++) {
            const locationElement = jobItems.nth(i).locator('text()');
            const locationText = await locationElement.textContent();
            if (locationText.trim() === selectedOption) {
                console.log(`Location ${selectedOption} matches the selected option`);
            } else {
                console.error(`Location ${locationText.trim()} does not match the selected option ${selectedOption}`);
            }
        }
    }
    */
/*
    async verifyLocationMatchesSelectedOption(selectedOption) {
        const jobItems = this.page.locator(this.jobItemsLocator);
        const jobItemsCount = await jobItems.count();
        console.log('jobItemsCount: ' + jobItemsCount);
    }*/
}
