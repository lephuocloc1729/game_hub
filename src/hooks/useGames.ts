import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
  const fetchGames = ({
    queryKey,
  }: {
    queryKey: [string, GameQuery];
  }): Promise<FetchResponse<Game>> => {
    const [, gameQuery] = queryKey;
    return apiClient.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.ordering,
        search: gameQuery.search,
      },
    });
  };
  return useQuery(["games", gameQuery], fetchGames);
};

export default useGames;
