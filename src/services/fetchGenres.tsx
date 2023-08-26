import apiClient from "./api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const fetchGenres = (): Promise<FetchGenresResponse> =>
  apiClient.get("/genres").then((res) => res.data);

export default fetchGenres;
