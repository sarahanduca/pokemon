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

export const mapFilteredPokemons = async (pokemonsList) => {
  const mappedPokemons = await Promise.all(
    pokemonsList.map(async ({ pokemon }) => {
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

export const mapPokemon = (pokemon) => {
  const mappedPokemon = {
    name: pokemon.name,
    img: pokemon.sprites.front_default,
    type: pokemon.types.map((type) => type.type.name),
    stats: {
      hp: pokemon.stats[0].base_stat,
      attack: pokemon.stats[1].base_stat,
      defense: pokemon.stats[2].base_stat,
      speed: pokemon.stats[5].base_stat,
    },
    abilities: pokemon.abilities.map((ability) => ability.ability.name),
    id: pokemon.id,
  };

  return mappedPokemon;
};
