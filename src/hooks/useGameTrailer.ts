import { useQuery } from "@tanstack/react-query";
import GameTrailer from "../entities/GameTrailer";
import APIClient from "../services/api-client";

const useGameTrailer = (slug: string) => {
  const apiClient = new APIClient<GameTrailer>(`/games/${slug}/movies`);
  return useQuery(["game_trailer", slug], apiClient.get);
};

export default useGameTrailer;
