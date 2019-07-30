const ConfigProduct  = require("./model/configProduct").ConfigProduct;

class CarInsurance {
  constructor(products = []) {
    this.products = products;
    this.configProduct = new ConfigProduct();
  }

  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      const config = this.configProduct.configProduct(this.products[i].name);
      this.products[i].sellIn += config.sellIn.value;
      let price = null;
  
      if (this.products[i].sellIn < 0) {
        price = config.price.priceDrops ? 0 : this.products[i].price + config.price.value + config.price.rulerSellIn;
      } else {
        if(config.price.rulerDay && this.configProduct.day > config.price.rulerDay.day) {
          price = this.products[i].price + config.price.value +  this.configProduct.iterateRulerDay(this.configProduct.day, config.price.rulerDay.day, config.price.value,  config.price.rulerDay.limit);
        } else {
          price = this.products[i].price + config.price.value;
        }
      }
  
      if (price > config.price.limit) {
        this.products[i].price = config.price.limit
      } else {
        this.products[i].price = price > 0 ? price : 0;
      }
    }
    this.configProduct.day ++;
    return this.products;
  }
}

module.exports = {
  CarInsurance
}
