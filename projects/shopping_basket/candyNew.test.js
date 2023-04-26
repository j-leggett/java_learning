const CandyNew = require('./candyNew')

describe('candyNew class', () => {
  it('returns the candy name', () => {
    const skittles = new CandyNew('Skittles', 2.99)
    expect(skittles.getName()).toEqual('Skittles')
  })

  it('returns the candy price', () => {
    const mars = new CandyNew('Mars', 4.99);
    expect(mars.getPrice()).toEqual(4.99);
  })
})