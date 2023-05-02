const fetchPokemon = require('./api')
class Pokedex{

  constructor() {
    this.cuaghtPokemon = []
  }

  all() {
    return this.cuaghtPokemon
  }

  catch(pokemon) {
    return this.cuaghtPokemon.push(fetchPokemon(pokemon))
  }
}

module.exports = Pokedex