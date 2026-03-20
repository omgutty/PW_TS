class ShopOrder {
  constructor(
    
  ) {}
}

class ShopBuilder {
  private steps: string[] = [];

  login(): this {
    this.steps.push("Login");
    return this;
  }

  search(): this {
    this.steps.push("Search");
    return this;
  }

  addToCart(): this {
    this.steps.push("Add to cart");
    return this;
  }

  build(): ShopOrder {
    return new ShopOrder();
  }
}

// usage
const order = new ShopBuilder()
  .login()
  .search()
  .addToCart()
  .build();

console.log(order);