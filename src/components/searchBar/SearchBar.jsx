import { useState } from "react";
import api from "../../api/api";
export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState("");

  const handleSearch = async (e) => {
    const pokemonData = await api(search);
    console.log(pokemonData);
    setPokemon(pokemonData.height);
  };
  return (
    <div className="searchBar justify-center flex">
      <input
        class="mx-8 my-8 placeholder:italic max-w-sm placeholder:text-slate-400 block bg-white w-1/2 border border-neutral-300 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-neutral-500 focus:ring-neutral-900 focus:ring-1 sm:text-sm"
        placeholder="Search for anything..."
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="button "
        className="bg-neutral-200 hover:bg-yellow-400 border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-500 focus:ring-neutral-900 focus:ring-1 py-1 px-3 h-1/2 mt-8"
        onClick={handleSearch}
      >
        Pesquisar
      </button>
    </div>
  );
}