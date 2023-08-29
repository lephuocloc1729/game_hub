import useGameTrailer from "../hooks/useGameTrailer";
import GameTrailerSkeleton from "./GameTrailerSkeleton";

const GameTrailer = ({ slug }: { slug: string }) => {
  const { data, isLoading, error } = useGameTrailer(slug);
  console.log(data);
  if (isLoading) return <GameTrailerSkeleton />;
  if (error) throw new Error();
  const first = data?.results[0];
  if (!first) return null;
  return first ? (
    <video
      className="border-[0.02px] border-slate-500 mb-8"
      src={first.data[480]}
      poster={first.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;
