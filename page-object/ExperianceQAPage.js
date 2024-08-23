import { expect } from '@playwright/test'

export class ExpirianceQAPage {
    constructor(page) {
        this.page = page;
        //this.articleList = 'col-12 col-md-3'
        this.articleTitle = page.locator('h3.teaser__headline.sv-headline-size-normal')
        this.articleType = page.locator('span.sv-label.sv-label--style-2')
        this.articleContents = page.locator('div.sv-wysiwyg.sv-text-size-normal')
    }

    async createJsonFileWithTeaserText(fileName) {
        await this.page.waitForSelector('h3.teaser__headline.sv-headline-size-normal');
        const headlines = await this.articleTitle.allTextContents();
        const typeOfArticles = await this.articleType.allTextContents();
        const articleContents = await this.articleContents.allTextContents();
        const data = headlines.map((headline, index) => ({
            Title: headline,
            Type: typeOfArticles[index],
            Content: articleContents[index]
        }));

        const fs = require('fs');
        const path = require('path');
        
        const date = new Date().toISOString().split('T')[0];
        const filePath = path.join(__dirname, '../../SystemVerification_project/test-results', fileName + '_' + date + '.json');
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    }

    async getArticleCountsByType() {
        const articleTypes = await this.articleType.allTextContents();
        const uniqueTypes = [...new Set(articleTypes)];
        const counts = uniqueTypes.map(type => ({
            Type: type,
            Count: articleTypes.filter(t => t === type).length
        })).sort((a, b) => b.Count - a.Count);
        return counts;
    }

    async saveArticleCountsToFile(articleName) {
        const counts = await this.getArticleCountsByType();
        const data = counts.map(count => `${count.Type}: ${count.Count}`).join('\n');

        const fs = require('fs');
        const path = require('path');
        const date = new Date().toISOString().split('T')[0];
        const filePath = path.join(__dirname, '../../SystemVerification_project/test-results', `${articleName}_${date}.txt`);
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, data);
    }

    async saveIndustryDataToJson(fileName) {
        const industryElements = await this.page.$$('div.teaser__content');
        const industryData = [];

        for (const element of industryElements) {
            const label = await element.$eval('span.sv-label', el => el.textContent.trim());
            const headline = await element.$eval('h3.teaser__headline', el => el.textContent.trim());
            const description = await element.$eval('div.sv-wysiwyg p', el => el.textContent.trim());
            const buttonText = await element.$eval('a.btn', el => el.textContent.trim());
            const buttonHref = await element.$eval('a.btn', el => el.getAttribute('href'));

            industryData.push({
                label,
                headline,
                description,
                buttonText,
                buttonHref
            });
        }

        const fs = require('fs');
        const path = require('path');
        
        const date = new Date().toISOString().split('T')[0];
        const filePath = path.join(__dirname, '../../SystemVerification_project/test-results', `${fileName}_${date}.json`);
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, JSON.stringify(industryData, null, 2));
    }
}