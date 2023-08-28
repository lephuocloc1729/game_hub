// import React, { useEffect, useState } from "react";
import React from "react";
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
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (isError)
    return (
      <p className="text-red text-2xl text-center">Please reload the page</p>
    );

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {isLoading && skeletons.map(() => <GameCardSkeleton />)}

        {isSuccess &&
          gamesData.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </React.Fragment>
          ))}
      </section>
      {hasNextPage && (
        <button
          className="block bg-blue-400 rounded-xl px-4 py-1"
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
    </>
  );
};

export default GameGrid;
