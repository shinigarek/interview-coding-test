function getConfig(name) {
    const configProduct = [{
        name: 'Mega Coverage',
        sellIn: {
            value: 0,
        },
        price: {
            value: 0,
            limit: 80, // el límite es 80. Pero de igual forma, este no sufre ningún cambio
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
            value: -1, // sube de a uno. Pero cuando el sellIn es negativo sube de 2
            rulerSellIn: 1,
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
            value: 1, // sube de a uno. Pero cuando el sellIn es negativo sube de 2
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
            value: 1, // sube de a uno, pero el quinto día subre de a 2 y al decimo de a 3 // Si SellIn queda negativo, el precio queda en 0
            rulerSellIn: 1,
            rulerDay: 5,
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
            value: -1, // Baja de uno en uno. Pero si SellIn es negativo, baja de 2 en dos
            rulerSellIn: -1,
            rulerDay: null,
            limit: 50,
            priceDrops: false
        }
      }];

      return configProduct.find(p => p.name === name);
};

module.exports.getConfig = getConfig;