const fetchPokemon = (pokemonname) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
  .then((response) => response.json())
  .then((data) => {  
    return {
      name: data['name'],
      id: data['id'],
      height: data['height'],
      weight: data['weight'],
      types: data.types.map( x => x.type.name)
    }
  })
}

module.exports = fetchPokemon

