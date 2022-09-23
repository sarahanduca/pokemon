export default async function get(query) {
  const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon";
  try {
    const response = await fetch(`${pokeApiUrl}/${query}`);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}
