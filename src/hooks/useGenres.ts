import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genre");

const useGenres = () => {
  return useQuery(["/genres"], apiClient.getAll, {
    staleTime: ms("1d"), // 1 day
    initialData: { count: genres.length, next: null, results: genres },
  });
};

export default useGenres;
