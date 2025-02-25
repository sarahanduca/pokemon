import typeStyle from "../typeStyle/typeStyle";

export default function SearchTags({ handleTypeFilter }) {
  const pokemonTypes = [
    { typeName: "none", emoji: "🧼" },
    { typeName: "bug", emoji: "🐛" },
    { typeName: "dark", emoji: "⚫" },
    { typeName: "dragon", emoji: "🐉" },
    { typeName: "electric", emoji: "⚡" },
    { typeName: "fairy", emoji: "🧚" },
    { typeName: "fighting", emoji: "🥊" },
    { typeName: "fire", emoji: "🔥" },
    { typeName: "flying", emoji: "🦅" },
    { typeName: "ghost", emoji: "👻" },
    { typeName: "grass", emoji: "🌿" },
    { typeName: "ground", emoji: "🌳" },
    { typeName: "ice", emoji: "🧊" },
    { typeName: "normal", emoji: "🧍" },
    { typeName: "poison", emoji: "⚗️" },
    { typeName: "psychic", emoji: "🔮" },
    { typeName: "rock", emoji: "🤘" },
    { typeName: "steel", emoji: "🔪" },
    { typeName: "water", emoji: "🌊" },
  ];

  return (
    <div
      className="searchTag cursor-pointer my-10 mx-auto w-full overflow-x-scroll h-12 whitespace-nowrap"
      style={{ scrollbarWidth: "thin" }}
    >
      {pokemonTypes.map((type) => {
        return (
          <span
            className={`rounded-xl h-fit w-fit m-2 text-tiny py-2 px-2 text-nowrap ${
              typeStyle(type.typeName).color
            }`}
            onClick={() => handleTypeFilter(type.typeName)}
          >
            {type.emoji}
            {type.typeName}
          </span>
        );
      })}
    </div>
  );
}
