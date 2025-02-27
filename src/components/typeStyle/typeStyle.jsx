function setTypeAtributes(attributes) {
  const [color, emoji] = attributes;
  return { color, emoji };
}

export default function typeStyle(type) {
  const typeStyle = {
    all: setTypeAtributes(["bg-white", ""]),
    bug: setTypeAtributes(["bg-bug", "🐛"]),
    dark: setTypeAtributes(["bg-dark", "⚫"]),
    dragon: setTypeAtributes(["bg-dragon", "🐉"]),
    electric: setTypeAtributes(["bg-electric", "⚡"]),
    fairy: setTypeAtributes(["bg-fairy", "🧚"]),
    fighting: setTypeAtributes(["bg-fighting", "🥊"]),
    fire: setTypeAtributes(["bg-fire", "🔥"]),
    flying: setTypeAtributes(["bg-flying", "🦅"]),
    ghost: setTypeAtributes(["bg-ghost", "👻"]),
    grass: setTypeAtributes(["bg-grass", "🌿"]),
    ground: setTypeAtributes(["bg-ground", "🌳"]),
    ice: setTypeAtributes(["bg-ice", "🧊"]),
    normal: setTypeAtributes(["bg-normal", "🧍"]),
    poison: setTypeAtributes(["bg-poison", "⚗️"]),
    psychic: setTypeAtributes(["bg-psychic", "🔮"]),
    rock: setTypeAtributes(["bg-rock", "🤘"]),
    steel: setTypeAtributes(["bg-steel", "🔪"]),
    water: setTypeAtributes(["bg-water", "🌊"]),
  };
  return typeStyle[type];
}
