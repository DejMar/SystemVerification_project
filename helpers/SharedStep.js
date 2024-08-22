import fs from 'fs';
import path from 'path';

export class SharedStep {
    constructor(page) {
        this.page = page;
    }

    async compareJsonFiles(filePath1, fileName1, filePath2, fileName2) {
        const fullFilePath1 = path.join(__dirname, filePath1, fileName1);
        const fullFilePath2 = path.join(__dirname, filePath2, fileName2);

        const file1 = JSON.parse(fs.readFileSync(fullFilePath1, 'utf8'));
        const file2 = JSON.parse(fs.readFileSync(fullFilePath2, 'utf8'));

        return JSON.stringify(file1) === JSON.stringify(file2);
    }
    async acceptCookies() {
        const acceptButton = this.page.locator('button[id="hs-eu-confirmation-button"]');
        if (await acceptButton.count() > 0) {
            await acceptButton.click();
        }
    }

    async saveJsonFileWithSubMenuItems(fileName) {
        const fs = require('fs');
        const path = require('path');

        const date = new Date().toISOString().split('T')[0];
        const filePath = path.join(__dirname, '../../SystemVerification_project/data-results', `${fileName}_${date}.json`);

        const subMenuItems = await this.page.locator('ul.sub-menu li a').all();
        const subMenuItemsData = await Promise.all(subMenuItems.map(async item => {
            const name = await item.textContent();
            const link = await item.getAttribute('href');
            return { name, link };
        }));

        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, JSON.stringify(subMenuItemsData, null, 2));
    }

    async takeScreenshotOnFailure(page, testInfo) {
        if (testInfo.status !== 'passed') {
            const screenshotPath = `screenshots/${testInfo.title.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.png`;
            await page.screenshot({ path: screenshotPath, fullPage: true });
            console.log(`Screenshot saved: ${screenshotPath}`);
        }
    }
}