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
    
        if (JSON.stringify(file1) !== JSON.stringify(file2)) {
            throw new Error('The JSON files are different.');
        }
    }
    async acceptCookies() {
        const acceptButton = this.page.locator('button[id="hs-eu-confirmation-button"]');
        if (await acceptButton.count() > 0) {
            await acceptButton.click();
        }
    }
}