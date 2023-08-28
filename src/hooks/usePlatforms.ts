import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const fetchPlatforms = (): Promise<FetchResponse<Platform>> =>
    apiClient.get("/platforms").then((res) => res.data);
  return useQuery(["platforms"], fetchPlatforms, {
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
