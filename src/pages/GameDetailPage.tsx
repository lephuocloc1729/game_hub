import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, isSuccess, error } = useGame(slug);
  if (isLoading) return <p>Loading...</p>;
  if (error || !game) throw new Error();
  if (isSuccess)
    return (
      <>
        <h2>{game.name}</h2>
        <p>{game.description_raw}</p>
      </>
    );
};

export default GameDetailPage;
