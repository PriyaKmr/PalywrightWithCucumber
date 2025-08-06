class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = '#ap_email';
    this.continueButton = '#continue';
    this.passwordInput = '#ap_password';
    this.signInButton = '#signInSubmit';
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async login(email, password) {
    await this.page.fill(this.emailInput, email);
    await this.page.click(this.continueButton);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.signInButton);
  }
}

module.exports = LoginPage;
