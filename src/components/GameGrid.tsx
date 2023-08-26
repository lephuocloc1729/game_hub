// import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import fetchGames from "../services/fetchGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = ({ selectedGenre }: { selectedGenre: number | null }) => {
  const {
    data: gamesData,
    isLoading,
    isSuccess,
    error,
    isError,
  } = useQuery(["games", { selectedGenreId: selectedGenre }], fetchGames);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
      {isLoading && skeletons.map((n) => <GameCardSkeleton />)}

      {isSuccess &&
        gamesData?.results?.map((game) => (
          <div>
            <GameCard game={game} />
          </div>
        ))}

      {isError && <p>{error.message}</p>}
    </section>
  );
};

export default GameGrid;
