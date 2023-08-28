import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genre");

const useGenres = () => {
  return useQuery(["/genres"], apiClient.getAll, {
    staleTime: 24 * 60 * 60 * 1000, // 1 day
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
