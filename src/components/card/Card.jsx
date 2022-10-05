import typeStyle from "../typeStyle/typeStyle";

export default function Card({ pokemon }) {
  const { name, img, type, stats, abilities, id } = pokemon;
  return (
    <div className="card h-80 w-60 rounded-md bg-white">
      <p>{name}</p>
      <p>#{id}</p>
      <div className="flex justify-around">
        <p>❤️ {stats.hp}</p>
        <p>⚔️ {stats.defense}</p>
      </div>
      <div className="flex justify-center border-4 border-gray-500 bg-gradient-to-b from-gray-400">
        <img src={img} alt="pokemon" />
      </div>

      {type.map((type) => (
        <h1 className={typeStyle(type).color}>
          {typeStyle(type).emoji} {type}
        </h1>
      ))}

      <div className="flex justify-around">
        {abilities.map((ability) => (
          <p>{ability}</p>
        ))}
      </div>
    </div>
  );
}
