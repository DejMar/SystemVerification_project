const { test, expect } = require('@playwright/test');
import { SharedStep } from "../helpers/SharedStep.js";
import { comparingLinks } from "../helpers/DataLinks.js";
import { HomePage } from "../page-object/HomePage.js";

test.describe('First test', () => {
  let sharedStep;
  let homePage;

  test.beforeEach(async ({ page }) => {
    sharedStep = new SharedStep(page);
    homePage = new HomePage(page);
    await page.goto('/');
    await sharedStep.acceptCookies()
  });

  test('TC03 - Verify offerings menu items', async ({ page }) => {
    await homePage.clickOnOfferingsLink();
    await sharedStep.saveJsonFileWithSubMenuItems('Offerings');
    const result = await sharedStep.compareJsonFiles(comparingLinks.dataPath,  comparingLinks.Offerings_File, comparingLinks.dataResultsPath, comparingLinks.Offerings_ActualLinks);
    expect(result).toBe(true);
  });

  test('TC04 - Verify experiance QA menu items', async ({ page }) => {
    await homePage.clickOnOfferingsLink();
    await sharedStep.saveJsonFileWithSubMenuItems('ExperianceQA');
    const result = await sharedStep.compareJsonFiles(comparingLinks.dataPath,  comparingLinks.ExperianceQA_File, comparingLinks.dataResultsPath, comparingLinks.ExperianceQA_ActualLinks);
    expect(result).toBe(true);
  });

  test('TC05- Verify careers menu items', async ({ page }) => {
    await homePage.clickOnOfferingsLink();
    await sharedStep.saveJsonFileWithSubMenuItems('Careers');
    const result = await sharedStep.compareJsonFiles(comparingLinks.dataPath,  comparingLinks.Careers_File, comparingLinks.dataResultsPath, comparingLinks.Careers_ActualLinks);
    expect(result).toBe(true);
  });

  test('TC06- Verify about menu items', async ({ page }) => {
    await homePage.clickOnOfferingsLink();
    await sharedStep.saveJsonFileWithSubMenuItems('About');
    const result = await sharedStep.compareJsonFiles(comparingLinks.dataPath,  comparingLinks.About_File, comparingLinks.dataResultsPath, comparingLinks.About_ActualLinks);
    expect(result).toBe(true);
  });
});