import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, isSuccess, error } = useGame(slug);
  if (isLoading) return <p>Loading...</p>;
  if (error || !game) throw new Error();
  if (isSuccess)
    return (
      <>
        <h2>{game.name}</h2>
        <ExpandableText>{game.description_raw}</ExpandableText>
      </>
    );
};

export default GameDetailPage;
