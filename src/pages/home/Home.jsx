// import { SearchBar } from "../../components/searchBar/SearchBar";
import ShowAllPokemons from "../../components/showAllPokemons/ShowAllPokemons";
import SearchTags from "../../components/searchTags/SearchTags";
import { useContext } from "react";
import { PokemonsContext } from "../../contexts/PokemonsContext.jsx";

export default function Home() {
  const { pokemons, setPokemons } = useContext(PokemonsContext);

  return (
    <div className="home text h-full my-10 mx-20 flex justify-center flex-col">
      {/* <SearchBar setPokemon={setPokemon} /> */}
      <SearchTags />
      <ShowAllPokemons pokemons={pokemons} setPokemons={setPokemons} />
    </div>
  );
}
