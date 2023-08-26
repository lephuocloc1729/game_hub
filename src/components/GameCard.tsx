import { Game } from "../services/fetchGames";
const GameCard = ({ game }: { game: Game }) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-slate-700">
      <img src={game.background_image} alt="" />
      <h2 className="bg-slate-700 text-3xl py-4 px-6 flex">{game.name}</h2>
    </div>
  );
};

export default GameCard;
