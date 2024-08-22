import { expect } from '@playwright/test'

export class HomePage {
    constructor(page) {
        this.page = page;
        this.offeringsLink = this.page.locator('a[href="#"]:has-text("Offerings")');
        this.experianceQALink = this.page.locator('text="Experience QA"');

        this.careersLink = this.page.locator('a[href="#"]:has-text("Careers")');
        this.aboutLink = this.page.locator('a[href="#"]:has-text("About")');
        this.downloadButton = this.page.locator('a[href^="/app/uploads/"]:has-text("Download Service Description")');
    }

    async clickOnOfferingsLink() {
        await this.offeringsLink.click();
    }

    async clickOnExperianceQALink() {
        await this.experianceQALink.click();
    }

    async clickOnCareersLink() {
        await this.careersLink.click();
    }

    async clickOnAboutLink() {
        await this.aboutLink.click();
    }

    async clickOnOption(optionName) {
        const optionLocator = this.page.locator(`text="${optionName}"`);
        await optionLocator.click();
    }

    async clickOnDownloadButton() {
        await this.downloadButton.click();
    }
}