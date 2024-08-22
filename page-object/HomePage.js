import { expect } from '@playwright/test'

export class HomePage {
    constructor(page) {
        this.page = page;
        this.downloadButton = this.page.locator('a[href^="/app/uploads/"]:has-text("Download Service Description")');
    }

    async openDropDown(option) {
        await this.page.locator(`a[href="#"]:has-text("${option}")`).click();
    }

    async clickOnOption(optionName) {
        const optionLocator = this.page.locator(`text="${optionName}"`);
        await optionLocator.click();
    }

    async clickOnDownloadButton() {
        await this.downloadButton.click();
    }
}