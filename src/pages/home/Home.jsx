import { SearchBar } from "../../components/searchBar/SearchBar";
import { useContext } from "react";
import { PokemonsContext } from "../../contexts/PokemonsContext.jsx";
import { getFilteredPokemons, getPokemons } from "../../api/api.js";
import { mapFilteredPokemons, mapPokemons } from "../../utils/mapPokemons.js";
import ShowAllPokemons from "../../components/showAllPokemons/ShowAllPokemons";
import SearchTags from "../../components/searchTags/SearchTags";

export default function Home() {
  const { pokemons, setPokemons, paginationUrl, setPaginationUrl } =
    useContext(PokemonsContext);

  const handleTypeFilter = async (filterChoosen) => {
    if (filterChoosen !== "none") {
      const filteredPokemonsByType = await getFilteredPokemons(
        `type/${filterChoosen}`
      ).then((res) => res.pokemon);
      setPaginationUrl({ next: "", prev: "" });

      const mappedPokemons = await mapFilteredPokemons(filteredPokemonsByType);

      setPokemons(mappedPokemons);
      return;
    }

    const getDefaultPokemons = await getPokemons();
    const mappedPokemons = await mapPokemons(getDefaultPokemons.results);

    console.log(getDefaultPokemons.next);
    setPaginationUrl({ next: getDefaultPokemons.next.split("/")[6], prev: "" });
    setPokemons(mappedPokemons);
  };

  return (
    <div className="home h-full my-28 flex justify-center items-center flex-col max-w-7xl mx-auto">
      <div className="fixed top-0 searchBar mt-20 bg-gray-200 pt-10 max-w-7xl w-full">
        <SearchBar
          setPokemons={setPokemons}
          setPaginationUrl={setPaginationUrl}
        />
        <SearchTags handleTypeFilter={handleTypeFilter} />
      </div>
      <ShowAllPokemons
        pokemons={pokemons}
        setPokemons={setPokemons}
        paginationUrl={paginationUrl}
        setPaginationUrl={setPaginationUrl}
      />
    </div>
  );
}
