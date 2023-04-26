class ShoppingBasket {

  constructor() {
  this.basketPrice = 0;
  this.candies = []
  }

  getTotalPrice() {

   return this.basketPrice
  }

  addItem(candy) {
    this.candies.push(candy.candy)
    this.basketPrice += candy.price;
  }

}


module.exports = ShoppingBasket