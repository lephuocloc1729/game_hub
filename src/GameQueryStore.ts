import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering?: string;
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (ordering: string) => void;
  setSearch: (search: string) => void;
  reset: () => void;
}
const useGameQuery = create<GameQueryStore>((set) => ({
  gameQuery: {
    ordering: "",
  },
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),

  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId },
    })),

  setSortOrder: (ordering) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, ordering } })),

  setSearch: (search) => set(() => ({ gameQuery: { search } })),

  reset: () => set(() => ({ gameQuery: { ordering: "" } })),
}));

export default useGameQuery;
