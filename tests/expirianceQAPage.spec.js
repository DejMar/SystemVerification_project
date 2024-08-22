const { test, expect } = require('@playwright/test');
import { ExpirianceQAPage } from "../page-object/ExperianceQAPage";
import { comparingLinks } from "../helpers/DataLinks"
import { SharedStep } from "../helpers/SharedStep.js";

test.describe('Experiance QA page', () => {
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

  test('TC08 - Verify article counts by type', async ({ page }) => {
    await expirianceQAPage.navigateToExpirianceQaPage();
    await expirianceQAPage.saveArticleCountsToFile();
  });
});