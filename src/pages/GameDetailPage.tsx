import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, isSuccess, error } = useGame(slug);
  if (isLoading) return <p>Loading...</p>;
  if (error || !game) throw new Error();
  if (isSuccess)
    return (
      <main className="px-4 pt-6">
        <h2 className="text-4xl font-bold">{game.name}</h2>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </main>
    );
};

export default GameDetailPage;
