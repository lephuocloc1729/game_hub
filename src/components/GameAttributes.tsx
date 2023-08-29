import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

const GameAttributes = ({ game }: { game: Game }) => {
  return (
    <dl className="grid grid-cols-2 gap-4">
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <p>{platform.name}</p>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <p>{genre.name}</p>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers.map((publisher) => (
          <p>{publisher.name}</p>
        ))}
      </DefinitionItem>
    </dl>
  );
};

export default GameAttributes;
