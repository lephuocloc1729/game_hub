import apiClient from "./api-client";

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
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const fetchGames = (): Promise<FetchGameResponse> =>
  apiClient.get("/games").then((res) => res.data);

export default fetchGames;
