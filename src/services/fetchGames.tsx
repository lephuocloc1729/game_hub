import apiClient from "./api-client";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const fetchGames = ({
  queryKey,
}: {
  queryKey: [string, { selectedId: GameQuery }];
}): Promise<FetchGameResponse> => {
  const [, { selectedId }] = queryKey;
  return apiClient
    .get("/games", {
      params: {
        genres: selectedId.genreId,
        platforms: selectedId.platformId,
        ordering: selectedId.ordering,
        search: selectedId.search,
      },
    })
    .then((res) => res.data);
};

export default fetchGames;
