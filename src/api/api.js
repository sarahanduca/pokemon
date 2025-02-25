const pokeApiUrl = "https://pokeapi.co/api/v2/";

async function getPokemons(query = "") {
  try {
    const response = await fetch(`${pokeApiUrl}pokemon/${query}`);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

async function getFilteredPokemons(filter) {
  try {
    const response = await fetch(`${pokeApiUrl}/${filter}`);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export { getPokemons, getFilteredPokemons };
