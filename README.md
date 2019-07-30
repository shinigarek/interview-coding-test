# Configuración de productos: 

### En archivo src/model/configProduct.js se encuentra una función que tiene la configuración de cada producto, según su comportamiento.

Para agregar un nuevo producto se debe agregar al arreglo "configProduct" el siguiente JSON:
```js
{
  name: 'Special Full Coverage', // OBLIGATORIO: Nombre del producto
  sellIn: {
      value: -1, // OBLIGATORIO: Disminuye el sellIn por día (si quieres que aumente lo dejas en positivo. Ej: 1)
  },
  price: {
      value: 1, // OBLIGATORIO: Aumenta o disminuye el precio por día (1= Aumenta / 2= Disminuye)
      rulerSellIn: 1, // En caso que el sellIn pase a negativo, puedes sumar o restar un valor adicional al precio. Si no quieres que sume o reste, debes poner 0
      rulerDay: { // OBLIGATORIO: si no tienes reglas de días como es el caso del producto Special Full Coverage, lo puedes dejar en null (rulerDay: null)
          limit: 2, // Este parametro restringe hasta cuantas veces por día puedes aumentar o disminuir el precio de un producto (Ej: El producto Special Full Coverage, aumento 2 veces su precio cada 5 días)
          day: 5 // Indica la cantidad de días, en que quieres que aumente tu valor.
      },
      limit: 50, // OBLIGATORIO: Todos los productos a excepcion del legendario, deben llegar su precio como máximo a 50. Si quieres que sea más, puedes aumentar esta valor
      priceDrops: true // OBLIGATORIO:  Si el precio de tu producto pasa a 0, cuando el sellIn es negativo, entonces lo debes activar como true. De lo contrario lo debes dejar en false
  }
}

```
# ComparaOnline Test Requirements Specification

Hi, welcome to the Software Engineer CO Test. In this test we expect to see your approach to refactor a legacy code into a testeable, object oriented solution.

### We will only consider your application if you submit your own repository with the proposed solution. Forks or pull requests to our repo will DISCARD your application.

The code updates the price of products of our business unit, Car Insurance, based on rules explained bellow.

Here you have a description of the products.

- All Products have a `sellIn` value which denotes the number of days we have to sell the product.
- All Products have a `price` value which denotes how much the product cost.
- At the end of each day our system lowers both values for every product.

Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, `price` degrades twice as fast.
- The `price` of a product is never negative.
- **"Full Coverage"** actually increases in `price` the older it gets.
- The `price` of a product is never more than 50.
- **"Mega Coverage"**, being a legendary product, never has to be sold or decreases in `price`.
- **"Special Full Coverage"**, like full coverage, increases in `price` as its `sellIn` value approaches:
	- `price` increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but.
	- `price` drops to 0 when no more days left (and the product is not valid anymore).

We have recently released a new kind of product *Super Sale product*. This requires an update to our system:

- **"Super Sale"** Products degrade in `price` twice as fast as normal Products.

Feel free to make any changes to the `updatePrice` method and add any new code as long as everything
still works correctly. However, DO NOT alter the constructor of `Product` class.

## Final notes

- Just for clarification, a product can never have its `price` increase above 50, however **"Mega Coverage"** is a
legendary product and as such its `price` is 80 and it never alters.

- On file `products_after_30_days.txt` you could see the behavior of the products in the period of 30 days. **The `Super Sale` product is not working properly. You have to implement it.**

## Evaluation rules
- Design an Object Oriented solution
- The solution must be scalable, we expect to be able to add new products on the future
- Meaningful git commits, we expect to see your solution approach as commit messages
- We expect a Node.js (>6) codebase, otherwise you should provide a `Dockerfile` with all the required dependencies to run the required commands.
- 100% code coverage, you should provide the report and the command to run the tests and get the coverage report.

### Required commands
- `npm run test`, should run the test suite and display the coverage report
- `npm run after-30-days`, should display an output similar to `products_after_30_days.txt`

You can use this code snipet as reference to implement the `after-30-days` script.

```js
const productsAtDayZero = [
  new Product('Medium Coverage', 10, 20),
  new Product('Full Coverage', 2, 0),
  new Product('Low Coverage', 5, 7),
  new Product('Mega Coverage', 0, 80),
  new Product('Mega Coverage', -1, 80),
  new Product('Special Full Coverage', 15, 20),
  new Product('Special Full Coverage', 10, 49),
  new Product('Special Full Coverage', 5, 49),
  new Product('Super Sale', 3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);
const productPrinter = function (product) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

for (let i = 1; i <= 30; i += 1) {
  console.log(`Day ${i}`);
  console.log('name, sellIn, price');
  carInsurance.updatePrice().forEach(productPrinter);
  console.log('');
}
```
