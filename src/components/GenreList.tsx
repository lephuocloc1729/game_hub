import useGenres from "../hooks/useGenres";
import GenreItem from "./GenreItem";

const GenreList = () => {
  const { data: genresData, isSuccess, isLoading, isError } = useGenres();
  if (isError) return;
  if (isLoading) return;
  if (isSuccess)
    return (
      <>
        <h2 className="text-2xl font-bold mb-6">Genres</h2>
        <ul className="">
          {genresData?.results.map((genre) => (
            <GenreItem genre={genre} />
          ))}
        </ul>
      </>
    );
};

export default GenreList;
