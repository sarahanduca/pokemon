import { getPokemons } from "../api/api";

export const mapPokemons = async (pokemonsList) => {
  const mappedPokemons = await Promise.all(
    pokemonsList.map(async (pokemon) => {
      const pokemonData = await getPokemons(pokemon.name);

      return {
        name: pokemon.name,
        img: pokemonData.sprites.front_default,
        type: pokemonData.types.map((type) => type.type.name),
        stats: {
          hp: pokemonData.stats[0].base_stat,
          attack: pokemonData.stats[1].base_stat,
          defense: pokemonData.stats[2].base_stat,
          speed: pokemonData.stats[5].base_stat,
        },
        abilities: pokemonData.abilities.map((ability) => ability.ability.name),
        id: pokemonData.id,
      };
    })
  );

  return mappedPokemons;
};
