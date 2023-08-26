import apiClient from "./api-client";
export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const fetchGames = (): Promise<FetchGameResponse> =>
  apiClient.get("/games").then((res) => res.data);

export default fetchGames;
