import { useState } from "react";
import { get } from "../../api/api";

const handleSearch = async (currPokemon, setPokemon) => {
  const pokemonData = await get(currPokemon.toLowerCase());
  const pokemonInfo = {
    name: pokemonData.name,
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
  setPokemon(pokemonInfo);
  return pokemonInfo;
};

function SearchBar(props) {
  const [search, setSearch] = useState("");
  const { setPokemon } = props;

  return (
    <div className="searchBar justify-center flex">
      <input
        class="mr-4 placeholder:italic max-w-sm placeholder:text-slate-400 block bg-white w-1/2 h-fit border border-neutral-300 rounded-md py-2 pl-4 focus:outline-none focus:border-neutral-500 focus:ring-neutral-900 focus:ring-1 sm:text-sm"
        placeholder="Digite um pokemon..."
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="button"
        className="bg-yellow-400 hover:bg-yellow-500 ease-in duration-200 border-2 border-neutral-800 rounded-md focus:outline-none focus:border-neutral-500 focus:ring-neutral-900 focus:ring-1 py-1 px-3 h-inherit"
        onClick={() => handleSearch(search, setPokemon)}
      >
        Pesquisar
      </button>
    </div>
  );
}

export { SearchBar, handleSearch };
