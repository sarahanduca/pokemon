import { useState } from "react";
import { getPokemons } from "../../api/api";
import { mapPokemon } from "../../utils/mapPokemons";

function SearchBar({ setPokemons }) {
  const [search, setSearch] = useState("");

  const handleSearch = async (search) => {
    const allPokemonsData = await getPokemons(search);

    if (allPokemonsData) {
      const pokemonsMapped = mapPokemon(allPokemonsData);
      setPokemons([pokemonsMapped]);
    }
  };

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
        onClick={() => {
          handleSearch(search);
          setSearch("");
        }}
      >
        Pesquisar
      </button>
    </div>
  );
}

export { SearchBar };
