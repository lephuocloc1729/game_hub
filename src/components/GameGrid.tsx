// import React, { useEffect, useState } from "react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = ({ gameQuery }: { gameQuery: GameQuery }) => {
  const {
    data: gamesData,
    isLoading,
    isSuccess,
    isError,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (isError)
    return (
      <p className="text-red text-2xl text-center">Please reload the page</p>
    );

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
      {isLoading && skeletons.map(() => <GameCardSkeleton />)}

      {isSuccess &&
        gamesData?.results?.map((game) => (
          <div>
            <GameCard game={game} />
          </div>
        ))}
    </section>
  );
};

export default GameGrid;
