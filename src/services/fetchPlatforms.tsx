import apiClient from "./api-client";
import { Platform } from "./fetchGames";

interface FetchPlatformsResponse {
  count: number;
  results: Platform[];
}

const fetchPlatforms = (): Promise<FetchPlatformsResponse> =>
  apiClient.get("/platforms").then((res) => res.data);

export default fetchPlatforms;
