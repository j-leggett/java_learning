const ShoppingBasket = require('./shoppingBasket')

describe('ShoppingBasket class', () => {
  it('returns the total price of an empty basket', () => {
    const basket = new ShoppingBasket()
    expect(basket.getTotalPrice()).toEqual(0)
  })

  it('adds an item to the basket contents', () => {
    const fakeCandy = {
        getName: () => "Mars",
        getPrice: () => 4.99
    }

    const basket = new ShoppingBasket();
    basket.addItem(fakeCandy);
    expect(basket.getCandies()).toEqual(['Mars']);
  })

  it('adds an item and updates total price', () => {
    const fakeCandy = {
        getName: () => "Mars",
        getPrice: () => 4.99
    }

    const basket = new ShoppingBasket();
    basket.addItem(fakeCandy);
    expect(basket.getTotalPrice()).toEqual(4.99);
  })

  it('adds multiple items and updates the price', () => {
    const fakeCandy = {
      getName: () => "Mars",
      getPrice: () => 4.99
    }
    const fakeCandy2 = {
      getName: () => "Skittles",
      getPrice: () => 2.99
    }

    const basket = new ShoppingBasket();
    basket.addItem(fakeCandy);
    basket.addItem(fakeCandy2);
    expect(basket.getTotalPrice()).toEqual(7.98);
    expect(basket.getCandies()).toEqual(['Mars', 'Skittles']);
  })

  
})