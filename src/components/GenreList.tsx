import { useQuery } from "@tanstack/react-query";
import fetchGenres from "../services/fetchGenres";
import GenreItem from "./GenreItem";
import { GameQuery } from "../App";

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
      <ul className="pl-3">
        {genresData?.results.map((genre) => (
          <GenreItem
            genre={genre}
            selectedGenreId={selectedGenreId}
            onSelect={onSelectGenre}
          />
        ))}
      </ul>
    );
};

export default GenreList;
