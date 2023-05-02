const Pokedex = require('./pokedex')

describe('Pokedex', () => {
  it('starts with an empty pokedex', async () => {
    pokedex = new Pokedex
    expect(pokedex.all()).toEqual([])
  })

  it('adds pikachu to the pokedex', async () => {
    const pokedex = new Pokedex();
    pokedex.catch('pikachu');
    const pokemon = pokedex.all()
    result = await pokemon[0]
    expect(result.name).toEqual('pikachu')
  })

  it('adds multiple pokemon to the pokedex', async () => {
    const pokedex = new Pokedex();
    pokedex.catch('charizard')
    pokedex.catch('pikachu')
    const pokemon = pokedex.all()
    result1 = await pokemon[0]
    result2 = await pokemon[1]
    expect(result1.name).toEqual('charizard')
    expect(result2.name).toEqual('pikachu')
  })
})