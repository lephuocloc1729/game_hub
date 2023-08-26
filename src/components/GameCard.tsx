import { Game } from "../services/fetchGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
const GameCard = ({ game }: { game: Game }) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-700 drop-shadow-xl">
      <img src={getCroppedImageUrl(game.background_image)} alt="" />
      <div className="py-4 px-6">
        <h2 className="dark:bg-slate-700 dark:text-white text-3xl mb-4">
          {game.name}
        </h2>
        <div className="flex justify-between items-center">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
