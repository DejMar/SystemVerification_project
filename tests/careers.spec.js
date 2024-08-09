const { test, expect } = require('@playwright/test');
import { CareersPage } from "../page-object/CareersPage";
import { SharedStep } from "../helpers/SharedStep.js";

test.describe('First test', () => {
  let careersPage;
  let sharedStep;

  test.beforeEach(async ({ page }) => {
    careersPage = new CareersPage(page);
    sharedStep = new SharedStep(page);
    await page.goto('/');
    await sharedStep.acceptCookies()
  });

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== 'passed') {
      const screenshotPath = `screenshots/${testInfo.title.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.png`;
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`Screenshot saved: ${screenshotPath}`);
    }
  });

  test.only('TC02 - Verify open positions', async ({ page }) => {
    await careersPage.navigateToCareersPage();
    await careersPage.verifyCareersURL();
    const selectAndReturnRandomLocation = await careersPage.selectAndReturnRandomLocation();
    //console.log('Returned value: ' + selectAndReturnRandomLocation);
    await careersPage.verifyLocationMatchesSelectedOption(selectAndReturnRandomLocation);
  });
});