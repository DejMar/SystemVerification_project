const { test, expect } = require('@playwright/test');
import { ExpirianceQAPage } from "../page-object/ExperianceQAPage";
import { comparingLinks } from "../helpers/DataLinks"
import { SharedStep } from "../helpers/SharedStep.js";

test.describe('First test', () => {
  let expirianceQAPage;
  let sharedStep;

  test.beforeEach(async ({ page }) => {
    expirianceQAPage = new ExpirianceQAPage(page);
    sharedStep = new SharedStep(page);
    await page.goto('/');
  });
  
  test.afterEach(async ({ page }, testInfo) => {
    await sharedStep.takeScreenshotOnFailure(page, testInfo);
  });

  test('TC01 - Verify News and Article page', async ({ page }) => {
    expect(page.url()).toBe('https://systemverification.com/en/');
    await expirianceQAPage.navigateToExpirianceQaPage();
    await expirianceQAPage.verifyArticleURL();
    await expirianceQAPage.createJsonFileWithTeaserText('ArticleInfo');
    await expirianceQAPage.saveArticleCountsToFile();
    const result = await sharedStep.compareJsonFiles(comparingLinks.dataPath, comparingLinks.articleFile, comparingLinks.testResultsPath, comparingLinks.actualArticles);
    expect(result).toBe(true);
  });
});