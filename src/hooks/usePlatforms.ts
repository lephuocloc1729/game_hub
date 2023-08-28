import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Platform } from "../services/fetchGames";
import platforms from "../data/platforms";

interface FetchPlatformsResponse {
  count: number;
  results: Platform[];
}

const usePlatforms = () => {
  const fetchPlatforms = (): Promise<FetchPlatformsResponse> =>
    apiClient.get("/platforms").then((res) => res.data);
  return useQuery(["platforms"], fetchPlatforms, {
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
