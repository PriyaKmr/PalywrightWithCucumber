const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I am logged into Amazon', async () => {
  // Reuse login from the login step or implement login directly
});

When('I search and add an item to the cart', async () => {
  await page.fill('#twotabsearchtextbox', 'Echo Dot');
  await page.click('input.nav-input[type="submit"]');
  await page.click('span.a-size-medium');
  await page.click('#add-to-cart-button');
});

When('I proceed to checkout and place the order', async () => {
  await page.click('#nav-cart');
  await page.click('input[name="proceedToRetailCheckout"]');
  // Fill address/payment if required
});

Then('the order confirmation should be displayed', async () => {
  const confirmation = await page.textContent('h1');
  expect(confirmation).toContain('Thank you');
});
