const { test, expect } = require('@playwright/test');
import { CareersPage } from "../page-object/CareersPage";
import { SharedStep } from "../helpers/SharedStep.js";
import { siteURL } from "../helpers/siteURL.js"


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

  test.only('TC02 - Verify open positions', async ({ page }) => {
    await sharedStep.verifyCurrentUrl(siteURL.SystemVerificationURL);
    await sharedStep.navigateToSubMenu('Careers', 'Open postions')
    await sharedStep.verifyCurrentUrl(siteURL.OpenPositionsURL);
    const selectAndReturnRandomLocation = await careersPage.selectAndReturnRandomLocation();
    console.log('Returned value: ' + selectAndReturnRandomLocation);
    //await page.pause();
    //await careersPage.verifyAllLocationsContainSelectedOption(selectAndReturnRandomLocation);
  });
});