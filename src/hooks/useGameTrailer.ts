import { useQuery } from "@tanstack/react-query";
import Trailer from "../entities/Trailer";
import APIClient from "../services/api-client";

const useGameTrailer = (slug: string) => {
  const apiClient = new APIClient<Trailer>(`/games/${slug}/movies`);
  return useQuery(["game_trailer", slug], apiClient.getAll);
};

export default useGameTrailer;
