import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshot";
import APIClient from "../services/api-client";

const useScreenshots = (slug: string) => {
  const apiClient = new APIClient<Screenshot>(`/games/${slug}/screenshots`);
  return useQuery(["games_screenshots", slug], apiClient.getAll);
};

export default useScreenshots;
