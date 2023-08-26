// import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import fetchGames from "../services/fetchGames";

const GameGrid = () => {
  const {
    data: gamesData,
    isLoading,
    isSuccess,
    error,
    isError,
  } = useQuery(["games"], fetchGames);

  return (
    <ul>
      {isLoading && <p>Loading...</p>}
      {isSuccess &&
        gamesData?.results?.map((game) => <li key={game.id}>{game.name}</li>)}
      {isError && <p>{error.message}</p>}
    </ul>
  );
};

export default GameGrid;
