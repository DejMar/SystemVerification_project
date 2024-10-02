const { test, expect } = require('@playwright/test');
import { SharedStep } from "../helpers/SharedStep.js";
import { comparingLinks } from "../helpers/DataLinks.js";
import { HomePage } from "../page-object/HomePage.js";
import { MenuItems } from "../helpers/DataLinks.js";


test.describe('Home page', () => {
  let sharedStep;
  let homePage;

  test.beforeEach(async ({ page }) => {
    sharedStep = new SharedStep(page);
    homePage = new HomePage(page);
    await page.goto('/');
    await sharedStep.acceptCookies()
  });

  test.afterEach(async ({ page }, testInfo) => {
    await sharedStep.takeScreenshotOnFailure(page, testInfo);
  });

  test('TC03 Verify offerings menu items', async ({ }) => {
    await homePage.clickOnOption(MenuItems.Offerings.name);
    await sharedStep.saveJsonFileWithSubMenuItems('Offerings');
    const result = await sharedStep.compareJsonFiles(comparingLinks.dataPath, comparingLinks.Offerings_File, comparingLinks.dataResultsPath, comparingLinks.Offerings_ActualLinks);
    expect(result).toBe(true);
  });

  test('TC04 Verify experiance QA menu items', async ({ }) => {
    await homePage.clickOnOption(MenuItems.ExperienceQA.name);
    await sharedStep.saveJsonFileWithSubMenuItems('ExperienceQA');
    const result = await sharedStep.compareJsonFiles(comparingLinks.dataPath, comparingLinks.ExperienceQA_File, comparingLinks.dataResultsPath, comparingLinks.ExperienceQA_ActualLinks);
    expect(result).toBe(true);
  });

  test('TC05 Verify careers menu items', async ({ }) => {
    await homePage.clickOnOption(MenuItems.Careers.name);
    await sharedStep.saveJsonFileWithSubMenuItems('Careers');
    const result = await sharedStep.compareJsonFiles(comparingLinks.dataPath, comparingLinks.Careers_File, comparingLinks.dataResultsPath, comparingLinks.Careers_ActualLinks);
    expect(result).toBe(true);
  });

  test('TC06 Verify about menu items', async ({ }) => {
    await homePage.clickOnOption(MenuItems.About.name);
    await sharedStep.saveJsonFileWithSubMenuItems('About');
    const result = await sharedStep.compareJsonFiles(comparingLinks.dataPath, comparingLinks.About_File, comparingLinks.dataResultsPath, comparingLinks.About_ActualLinks);
    expect(result).toBe(true);
  });

  test('TC07 Verify download file test', async ({ page }) => {
    await sharedStep.navigateToSubMenu(MenuItems.Offerings.name, MenuItems.Offerings.subMenus.DedicatedTeam.Outsourcing)
    await homePage.clickOnDownloadButton();
    await page.pause()
    //TODO Verify download page is opened in another tab
  });
});