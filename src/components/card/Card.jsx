import typeStyle from "../typeStyle/typeStyle";

export default function Card({ pokemon }) {
  const { name, img, type, stats, abilities, id } = pokemon;
  const cardBg = "bg-card-bg";
  return (
    <div className="card h-80 w-60 rounded-lg bg-white p-6 pt-3 shadow-lg">
      <p>{name}</p>
      <p>#{id}</p>
      <div className="flex justify-between">
        <p>❤️ {stats.hp}</p>
        <p>⚔️ {stats.defense}</p>
      </div>
      <div className={`flex justify-center rounded-lg ${cardBg}`}>
        <img src={img} alt="pokemon" />
      </div>
      <div className="flex justify-between mt-1">
        {type.map((type) => (
          <h1 className={`w-fit pl-1 pr-2 text-sm text-center rounded-lg flex ${typeStyle(type).color}`}>
            {typeStyle(type).emoji}{type}
          </h1>
        ))}
      </div>

      <div className="flex justify-between">
        <div>
          <p>👊 {stats.attack}</p>
          <p>🏃 {stats.speed}</p>
          <p>🛡️ {stats.defense}</p>
        </div>
        <div className="text-right">
          {abilities.map((ability) => (
            <p>{ability}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
