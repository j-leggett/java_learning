const CandyNew = require('./candyNew')

class ShoppingBasket {

  constructor() {
  this.basketPrice = 0;
  this.candies = []
  this.discount = 0
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
   return (this.basketPrice - this.discount).toFixed(2)
  }

  addItem(candy) {
    this.candies.push(candy.getName())
    this.basketPrice += candy.getPrice();
  }

  getCandies() {
    return this.candies
  }
}

const skittles = new CandyNew('Skittles', 2.99);
const mars = new CandyNew('Mars', 4.99);
const basket = new ShoppingBasket();
basket.addItem(skittles);
basket.addItem(mars);
basket.applyDiscount(5);
console.log(basket.getTotalPrice());

module.exports = ShoppingBasket