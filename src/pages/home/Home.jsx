import { SearchBar } from "../../components/searchBar/SearchBar";
import { useContext } from "react";
import { PokemonsContext } from "../../contexts/PokemonsContext.jsx";
import { getFilteredPokemons, getPokemons } from "../../api/api.js";
import { mapFilteredPokemons, mapPokemons } from "../../utils/mapPokemons.js";
import ShowAllPokemons from "../../components/showAllPokemons/ShowAllPokemons";
import SearchTags from "../../components/searchTags/SearchTags";

export default function Home() {
  const { pokemons, setPokemons } = useContext(PokemonsContext);

  const handleTypeFilter = async (filterChoosen) => {
    if (filterChoosen !== "none") {
      const filteredPokemonsByType = await getFilteredPokemons(
        `type/${filterChoosen}`
      ).then((res) => res.pokemon);

      const mappedPokemons = await mapFilteredPokemons(filteredPokemonsByType);

      setPokemons(mappedPokemons);
      return;
    }

    const getDefaultPokemons = await getPokemons();
    const mappedPokemons = await mapPokemons(getDefaultPokemons.results);

    setPokemons(mappedPokemons);
  };

  return (
    <div className="home h-full my-10 flex justify-center flex-col max-w-7xl mx-auto">
      <SearchBar setPokemons={setPokemons} />
      <SearchTags handleTypeFilter={handleTypeFilter} />
      <ShowAllPokemons pokemons={pokemons} setPokemons={setPokemons} />
    </div>
  );
}
