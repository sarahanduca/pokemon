import { useState } from "react";
import Card from "../../components/card/Card";
import SearchBar from "../../components/searchBar/SearchBar";
import ShowAllPokemons from "../../components/showAllPokemons/ShowAllPokemons";

export default function Home() {
  const [pokemon, setPokemon] = useState({
    name: "",
    img: "",
    type: [],
    stats: {
      hp: "",
      attack: "",
      defense: "",
      speed: "",
    },
    abilities: [],
    id: "",
  });

  return (
    <div className="home text h-full my-10 mx-20">
      <SearchBar setPokemon={setPokemon} />
      <ShowAllPokemons />
      {pokemon.name ? <Card pokemon={pokemon} /> : null}
    </div>
  );
}
