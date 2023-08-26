import { useQuery } from "@tanstack/react-query";
import apiClient from "./api-client";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const fetchGenres = (): Promise<FetchGenresResponse> =>
  apiClient.get("/genres").then((res) => res.data);

export default fetchGenres;
