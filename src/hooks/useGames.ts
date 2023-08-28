import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = ({ gameQuery }: { gameQuery: GameQuery }) => {
  const fetchGames = ({
    queryKey,
  }: {
    queryKey: [string, { gameQuery: GameQuery }];
  }): Promise<FetchResponse<Game>> => {
    const [, { gameQuery }] = queryKey;
    return apiClient
      .get("/games", {
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.ordering,
          search: gameQuery.search,
        },
      })
      .then((res) => res.data);
  };
  return useQuery(["games", { gameQuery }], fetchGames);
};

export default useGames;
