const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon";

async function getPokemons(query = "") {
  try {
    const response = await fetch(`${pokeApiUrl}/${query}`);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export { getPokemons };
