const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("CO Test for the producto Medium Coverage", function() {
  let coTestProduct = new CarInsurance([ new Product("Medium Coverage", 10, 20) ]);

  it("should return: sellIn=9 / price=19 for the day 1", function() {
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Medium Coverage");
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(19);
  });

  it("should return: sellIn=8 / price=18 for the day 2", function() {
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Medium Coverage");
    expect(products[0].sellIn).equal(8);
    expect(products[0].price).equal(18);
  });

  it("should return: sellIn=7 / price=17 for the day 3", function() {
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Medium Coverage");
    expect(products[0].sellIn).equal(7);
    expect(products[0].price).equal(17);
  });

  it("should return: sellIn=6 / price=16 for the day 4", function() {
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Medium Coverage");
    expect(products[0].sellIn).equal(6);
    expect(products[0].price).equal(16);
  });

  it("should return: sellIn=5 / price=15 for the day 5", function() {
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Medium Coverage");
    expect(products[0].sellIn).equal(5);
    expect(products[0].price).equal(15);
  });

  it("should return: sellIn=4 / price=14 for the day 6", function() {
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Medium Coverage");
    expect(products[0].sellIn).equal(4);
    expect(products[0].price).equal(14);
  });

  it("should return: sellIn=-14 / price=0 for the day 25", function() {
    coTestProduct = new CarInsurance([ new Product("Medium Coverage", -14, 0) ]);
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Medium Coverage");
    expect(products[0].sellIn).equal(-15);
    expect(products[0].price).equal(0);
  });
});


describe("CO Test for the producto Full Coverage", function() {
  let coTestProduct = new CarInsurance([ new Product("Full Coverage", 2, 0) ]);

  it("should return: sellIn=1 / price=1 for the day 1", function() {
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(1);
    expect(products[0].price).equal(1);
  });

  it("should return: sellIn=0 / price=2 for the day 2", function() {
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(2);
  });

  it("should return: sellIn=-1 / price=4 for the day 3", function() {
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(4);
  });

  it("should return: sellIn=-2 / price=6 for the day 4", function() {
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(-2);
    expect(products[0].price).equal(6);
  });

  it("should return: sellIn=-3 / price=8 for the day 5", function() {
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(-3);
    expect(products[0].price).equal(8);
  });

  it("should return: sellIn=-4 / price=10 for the day 6", function() {
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(-4);
    expect(products[0].price).equal(10);
  });

  it("should return: sellIn=--28 / price=50 for the day 30", function() {
    coTestProduct = new CarInsurance([ new Product("Full Coverage", -27, 50) ]);
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(-28);
    expect(products[0].price).equal(50);
  });

});

describe("CO Test for the producto Mega Coverage", function() {
  let coTestProduct = new CarInsurance([ new Product("Mega Coverage", 0, 80) ]);

  it("should return: sellIn=0 / price=80 for the day 1", function() {
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Mega Coverage");
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(80);
  });

  it("should return: sellIn=0 / price=80 for the day 2", function() {
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Mega Coverage");
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(80);
  });

  it("should return: sellIn=0 / price=80 for the day 3", function() {
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Mega Coverage");
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(80);
  });

  it("should return: sellIn=0 / price=80 for the day 4", function() {
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Mega Coverage");
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(80);
  });
});

describe("CO Test for the producto Special Full Coverage", function() {
  let coTestProduct = new CarInsurance([ new Product("Special Full Coverage", 15, 20) ]);

  it("should return: sellIn=14 / price=21 for the day 1 / For the values entered 15 and 20", function() {
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(14);
    expect(products[0].price).equal(21);
  });

  it("should return: sellIn=13 / price=22 for the day 2 / For the values entered 15 and 20", function() {
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(13);
    expect(products[0].price).equal(22);
  });

  it("should return: sellIn=12 / price=23 for the day 3 / For the values entered 15 and 20", function() {
    const products = coTestProduct.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellIn).equal(12);
    expect(products[0].price).equal(23);
  });
});
