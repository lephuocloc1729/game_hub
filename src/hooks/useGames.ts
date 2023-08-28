import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import useGameQuery from "../GameQueryStore";
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

const useGames = () => {
  const gameQuery = useGameQuery((s) => s.gameQuery);
  const fetchGames = ({ pageParam = 1 }): Promise<FetchResponse<Game>> => {
    return apiClient.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.ordering,
        search: gameQuery.search,
        page: pageParam,
      },
    });
  };
  return useInfiniteQuery(["games", gameQuery], fetchGames, {
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("1d"),
  });
};

export default useGames;
