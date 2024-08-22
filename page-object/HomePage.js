import { expect } from '@playwright/test'

export class HomePage {
    constructor(page) {
        this.page = page;
        this.offeringsLink = this.page.locator('a[href="#"]:has-text("Offerings")');
    }

    async verifyArticleURL() {
        expect(this.page.url()).toBe(this.articleURL);
    }

    async clickOnOfferingsLink() {
        await this.offeringsLink.click();
    }

    async saveJsonFileWithMenuItems() {
        const fs = require('fs');
        const path = require('path');

        const date = new Date().toISOString().split('T')[0];
        const filePath = path.join(__dirname, '../../SystemVerification_project/data-results', `menuItems_${date}.json`);

        const menuItems = await this.page.locator('ul.sub-menu li a').all();
        const menuItemsData = await Promise.all(menuItems.map(async item => {
            const name = await item.textContent();
            const link = await item.getAttribute('href');
            return { name, link };
        }));

        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, JSON.stringify(menuItemsData, null, 2));
    }


}