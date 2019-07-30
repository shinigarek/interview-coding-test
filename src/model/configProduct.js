class ConfigProduct {
    constructor() {
        this.day = 1;
        this.configProduct = this.getConfigProduct;
        this.iterateRulerDay = this.getIterateRulerDay;
    }

    getIterateRulerDay(day, ruler, value, limit) {
        const calc = day % ruler === 0 ? value : Math.floor(day/ruler);
        return calc >= limit ? limit : calc;
    }

    getConfigProduct(name) {
        const configProduct = [{
            name: 'Mega Coverage',
            sellIn: {
                value: 0,
            },
            price: {
                value: 0,
                limit: 80,
                rulerSellIn: 0,
                rulerDay: null,
                priceDrops: false
            }
          },
          {
            name: 'Medium Coverage',
            sellIn: {
                value: -1,
            },
            price: {
                value: -1,
                rulerSellIn: -1,
                rulerDay: null,
                limit: 50,
                priceDrops: false
            }
          },
          {
            name: 'Full Coverage',
            sellIn: {
                value: -1,
            },
            price: {
                value: 1,
                rulerSellIn: 1,
                rulerDay: null,
                limit: 50,
                priceDrops: false
            }
          },
          {
            name: 'Low Coverage',
            sellIn: {
                value: -1,
            },
            price: {
                value: -1,
                rulerSellIn: 1,
                rulerDay: null,
                limit: 50,
                priceDrops: true
            }
          },
          {
            name: 'Special Full Coverage',
            sellIn: {
                value: -1,
            },
            price: {
                value: 1,
                rulerSellIn: 1,
                rulerDay: {
                    limit: 2,
                    day: 5
                },
                limit: 50,
                priceDrops: true
            }
          },
          {
            name: 'Super Sale',
            sellIn: {
                value: -1,
            },
            price: {
                value: -1,
                rulerSellIn: -1,
                rulerDay: null,
                limit: 50,
                priceDrops: false
            }
          }];
    
          return configProduct.find(p => p.name === name);
    }
}

module.exports = {
    ConfigProduct
}
