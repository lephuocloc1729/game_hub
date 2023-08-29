import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "../entities/Game";
import ms from "ms";

const useGame = (slug?: string) => {
  const apiClient = new APIClient<Game>(`games/${slug}`);
  return useQuery(["game", slug], apiClient.get, {
    staleTime: ms("1d"),
  });
};

export default useGame;
