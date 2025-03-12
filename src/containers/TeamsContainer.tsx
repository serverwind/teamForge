import { useSelector } from "react-redux";
import { useState } from "react";
import { Teams } from "../pages/Teams/Teams";
import { RootState } from "../store/store";

export const TeamsContainer = () => {
  const teams = useSelector((state: RootState) => state.teams.teams);
  const filteredTeams = useSelector((state: RootState) => state.teams.filteredTeams);
  const searched = useSelector((state: RootState) => state.teams.searched);
  const itemsPerPage = useSelector((state: RootState) => state.teams.itemsPerPage);

  let displayedTeams = teams;
  if (searched) {
    displayedTeams = filteredTeams;
  }

  // pagination
  const totalItems = displayedTeams.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTeams = displayedTeams.slice(startIndex, endIndex);

  return <Teams teams={paginatedTeams} totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage} />;
};
