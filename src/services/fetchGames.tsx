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
  metacritic: number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const fetchGames = ({
  queryKey,
}: {
  queryKey: [
    string,
    { selectedGenreId: number | null; selectedPlatformId: number | null }
  ];
}): Promise<FetchGameResponse> => {
  const [, { selectedGenreId, selectedPlatformId }] = queryKey;
  return apiClient
    .get("/games", {
      params: { genres: selectedGenreId, platforms: selectedPlatformId },
    })
    .then((res) => res.data);
};

export default fetchGames;
