import { useQuery } from "@tanstack/react-query";
import fetchGenres from "../services/fetchGenres";
import GenreItem from "./GenreItem";

const GenreList = ({
  onSelectGenre,
  selectedGenreId,
}: {
  onSelectGenre: React.Dispatch<React.SetStateAction<number | null>>;
  selectedGenreId: number | null;
}) => {
  const {
    data: genresData,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useQuery(["genres"], fetchGenres);
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
