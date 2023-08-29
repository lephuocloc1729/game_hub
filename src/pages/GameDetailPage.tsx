import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import Screenshots from "../components/Screenshots";
const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, isSuccess, error } = useGame(slug);
  if (isLoading) return <p>Loading...</p>;
  if (error || !game) throw new Error();
  if (isSuccess)
    return (
      <main className="px-4 pt-6 md:flex md:gap-6">
        <section className="flex-1">
          <h2 className="text-4xl font-bold">{game.name}</h2>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </section>
        <section className="flex-1">
          <GameTrailer slug={slug!} />
          <Screenshots slug={slug!} />
        </section>
      </main>
    );
};

export default GameDetailPage;
