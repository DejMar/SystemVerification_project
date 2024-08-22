const { test, expect } = require('@playwright/test');
import { CareersPage } from "../page-object/CareersPage";
import { SharedStep } from "../helpers/SharedStep.js";

test.describe('Careers page', () => {
  let careersPage;
  let sharedStep;

  test.beforeEach(async ({ page }) => {
    careersPage = new CareersPage(page);
    sharedStep = new SharedStep(page);
    await page.goto('/');
    await sharedStep.acceptCookies()
  });

  test.afterEach(async ({ page }, testInfo) => {
    await sharedStep.takeScreenshotOnFailure(page, testInfo);
  });

  test('TC02 - Verify open positions', async ({ page }) => {
    await careersPage.navigateToCareersPage();
    await careersPage.verifyCareersURL();
    const selectAndReturnRandomLocation = await careersPage.selectAndReturnRandomLocation();
    console.log('Returned value: ' + selectAndReturnRandomLocation);
    //await page.pause();
    //await careersPage.verifyAllLocationsContainSelectedOption(selectAndReturnRandomLocation);
  });
});