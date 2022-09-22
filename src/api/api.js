export default async function get(query) {
  const pokeApiUrl = "http://pokeapi.co/api/v2/pokmeon";
  const response = await fetch(`${pokeApiUrl}/${query}`);
  return await response.json();
}
