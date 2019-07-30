const { getConfig } = require("./config");

class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}


class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      const config = getConfig(this.products[i].name);
      this.products[i].sellIn += config.sellIn.value;
      let price = null;
  
      if (this.products[i].sellIn < 0) {
          price = config.price.priceDrops ? 0 : this.products[i].price + config.price.value + config.price.rulerSellIn;
      } else {
          price = this.products[i].price + config.price.value;
      }
  
      if (price > config.price.limit) {
        this.products[i].price = config.price.limit
      } else {
        this.products[i].price = price > 0 ? price : 0;
      }
    }

    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
