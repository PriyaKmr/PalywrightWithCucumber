const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');

let browser, context, page;

Given('I navigate to the Amazon login page', async () => {
  browser = await chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto(process.env.BASE_URL + '/ap/signin');
});

When('I login with valid credentials', async () => {
  await page.fill('#ap_email', process.env.USER_EMAIL);
  await page.click('#continue');
  await page.fill('#ap_password', process.env.USER_PASSWORD);
  await page.click('#signInSubmit');
});

Then('I should be redirected to the Amazon homepage', async () => {
  await page.waitForSelector('#nav-logo');
  const title = await page.title();
  expect(title).toContain('Amazon');
  await browser.close();
});
