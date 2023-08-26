import { useQuery } from "@tanstack/react-query";
import fetchGenres from "../services/fetchGenres";

const GenreList = () => {
  const {
    data: genresData,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useQuery(["genres"], fetchGenres);
  return (
    <div>
      {genresData?.results.map((genre) => (
        <p>{genre.name}</p>
      ))}
    </div>
  );
};

export default GenreList;
