const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I am logged into Amazon', async function () {
  const { chromium } = require('playwright');
  this.browser = await chromium.launch();
  const context = await this.browser.newContext();
  this.page = await context.newPage();
  await this.page.goto('https://www.amazon.in/ap/signin');
  await this.page.fill('#ap_email', process.env.USER_EMAIL);
  await this.page.click('#continue');
  await this.page.fill('#ap_password', process.env.USER_PASSWORD);
  await this.page.click('#signInSubmit');
});

When('I search and add an item to the cart', async function () {
  await this.page.fill('#twotabsearchtextbox', 'Echo Dot');
  await this.page.click('input.nav-input[type="submit"]');
  await this.page.click('span.a-size-medium');
  await this.page.click('#add-to-cart-button');
});

When('I proceed to checkout and place the order', async function () {
  await this.page.click('#nav-cart');
  await this.page.click('input[name="proceedToRetailCheckout"]');
});

Then('the order confirmation should be displayed', async function () {
  const confirmation = await this.page.textContent('h1');
  expect(confirmation).toContain('Thank you');
  await this.browser.close();
});
