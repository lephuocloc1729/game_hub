import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

const GameAttributes = ({ game }: { game: Game }) => {
  console.log(game.genres);

  return (
    <dl className="grid grid-cols-2 gap-4 mb-6">
      {game.parent_platforms && (
        <DefinitionItem term="Platforms">
          {game.parent_platforms.map(({ platform }) => (
            <p>{platform.name}</p>
          ))}
        </DefinitionItem>
      )}

      {game.metacritic && (
        <DefinitionItem term="Metascore">
          <CriticScore score={game.metacritic} />
        </DefinitionItem>
      )}

      {game.genres.length !== 0 && (
        <DefinitionItem term="Genres">
          {game.genres.map((genre) => (
            <p>{genre.name}</p>
          ))}
        </DefinitionItem>
      )}
      {game.publishers.length !== 0 && (
        <DefinitionItem term="Publishers">
          {game.publishers.map((publisher) => (
            <p>{publisher.name}</p>
          ))}
        </DefinitionItem>
      )}
    </dl>
  );
};

export default GameAttributes;
