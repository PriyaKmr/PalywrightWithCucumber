class HomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = '#twotabsearchtextbox';
    this.searchButton = 'input.nav-input[type="submit"]';
    this.firstItem = 'span.a-size-medium';
    this.addToCartButton = '#add-to-cart-button';
  }

  async searchProduct(productName) {
    await this.page.fill(this.searchBox, productName);
    await this.page.click(this.searchButton);
  }

  async addFirstItemToCart() {
    await this.page.click(this.firstItem);
    await this.page.click(this.addToCartButton);
  }
}

module.exports = HomePage;
