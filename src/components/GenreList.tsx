import { useQuery } from "@tanstack/react-query";
import fetchGenres from "../services/fetchGenres";
import GenreItem from "./GenreItem";

const GenreList = ({
  onSelectGenre,
  selectedGenreId,
}: {
  onSelectGenre: (genreId: number | null) => void;
  selectedGenreId: number | null;
}) => {
  const {
    data: genresData,
    isSuccess,
    isLoading,
    isError,
  } = useQuery(["genres"], fetchGenres);
  if (isError) return;
  if (isLoading) return;
  if (isSuccess)
    return (
      <>
        <h2 className="text-2xl font-bold mb-6">Genres</h2>
        <ul className="">
          {genresData?.results.map((genre) => (
            <GenreItem
              genre={genre}
              selectedGenreId={selectedGenreId}
              onSelect={onSelectGenre}
            />
          ))}
        </ul>
      </>
    );
};

export default GenreList;
