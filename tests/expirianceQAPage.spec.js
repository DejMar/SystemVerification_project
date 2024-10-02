const { test, expect } = require('@playwright/test');
import { ExpirianceQAPage } from "../page-object/ExperianceQAPage";
import { comparingLinks } from "../helpers/DataLinks"
import { SharedStep } from "../helpers/SharedStep.js";
import { HomePage } from "../page-object/HomePage.js";
import { siteURL } from "../helpers/siteURL.js"
import { MenuItems } from "../helpers/DataLinks.js";

test.describe('Experiance QA page', () => {
  let expirianceQAPage;
  let sharedStep;
  let homePage;

  test.beforeEach(async ({ page }) => {
    expirianceQAPage = new ExpirianceQAPage(page);
    sharedStep = new SharedStep(page);
    homePage = new HomePage(page);
    await page.goto('/');
    await sharedStep.acceptCookies()
  });
  
  test.afterEach(async ({ page }, testInfo) => {
    await sharedStep.takeScreenshotOnFailure(page, testInfo);
  });

  test('TC01 - Verify News and Article page', async ({ page }) => {
    await sharedStep.verifyCurrentUrl(siteURL.SystemVerificationURL);
    await sharedStep.navigateToSubMenu(MenuItems.ExperienceQA.name, MenuItems.ExperienceQA.subMenus.NewsAndArticles);
    await sharedStep.verifyCurrentUrl(siteURL.NewsAndArticlesURL);
    await expirianceQAPage.createJsonFileWithTeaserText('ArticleInfo');
    await expirianceQAPage.saveArticleCountsToFile('ArticleCount_Sorted');
    const result = await sharedStep.compareJsonFiles(comparingLinks.dataPath, comparingLinks.articleFile, comparingLinks.testResultsPath, comparingLinks.actualArticles);
    expect(result).toBe(true);
  });

  test('TC08 - Verify article counts by type', async ({ page }) => {
    await sharedStep.navigateToSubMenu(MenuItems.ExperienceQA.name, MenuItems.ExperienceQA.subMenus.NewsAndArticles);
    await expirianceQAPage.saveArticleCountsToFile('ArticleCount_Sorted');
  });

  test('TC09 - Verify Industry articles', async ({ page }) => {
    await sharedStep.navigateToSubMenu(MenuItems.ExperienceQA.name, MenuItems.ExperienceQA.subMenus.Industries);
    await expirianceQAPage.saveArticleCountsToFile('IndustryArticleCount_Sorted');
  });
});