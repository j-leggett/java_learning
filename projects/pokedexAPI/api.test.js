const fetchPokemon = require('./api')

describe('fetchPokemon', () => {

  it('can fetch the data for pikachu', async () => {
    const pokedex = fetchPokemon('pikachu')
      .then((data) => {
        expect(data.name).toEqual('pikachu')
        expect(data.height).toEqual(4);
      })
  })
})