import apiClient from "./api-client";
interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const fetchGames = (): Promise<FetchGameResponse> =>
  apiClient.get("/games").then((res) => res.data);

export default fetchGames;
