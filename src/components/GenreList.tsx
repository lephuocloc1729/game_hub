import { useQuery } from "@tanstack/react-query";
import fetchGenres from "../services/fetchGenres";
import GenreItem from "./GenreItem";

const GenreList = () => {
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
        <GenreItem genre={genre} />
      ))}
    </ul>
  );
};

export default GenreList;
