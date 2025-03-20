import { useSelector } from "react-redux";
import { useState } from "react";
import { Players } from "../pages/Players/Players";
import { RootState } from "../store/store";

export const PlayersContainer = () => {
  const players = useSelector((state: RootState) => state.players.players);
  const teams = useSelector((state: RootState) => state.teams.teams);
  const filteredPlayers = useSelector((state: RootState) => state.players.filteredPlayers);
  const searched = useSelector((state: RootState) => state.players.searched);
  const itemsPerPage = useSelector((state: RootState) => state.players.itemsPerPage);

  let displayedPlayers = players;
  if (searched) {
    displayedPlayers = filteredPlayers;
  }

  // pagination
  const totalItems = displayedPlayers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPlayers = displayedPlayers.slice(startIndex, endIndex);

  return <Players players={paginatedPlayers} filteredPlayers={filteredPlayers} teams={teams} totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage} />;
};
