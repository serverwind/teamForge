import { useSelector } from "react-redux";
import { Teams } from "../pages/Teams/Teams";
import { RootState } from "../store/store";

export const TeamsContainer = () => {
  const teams = useSelector((state: RootState) => state.teams.teams);
  const filteredTeams = useSelector((state: RootState) => state.teams.filteredTeams);
  const searched = useSelector((state: RootState) => state.teams.searched);
  const itemsPerPage = useSelector((state: RootState) => state.teams.itemsPerPage);
  const page = useSelector((state: RootState) => state.teams.page);
  const totalPages = Math.ceil(teams.length / itemsPerPage);

  let displayedTeams = teams.slice(page-1, itemsPerPage);
  if (searched) {
    displayedTeams = filteredTeams;
  }

  return <Teams teams={displayedTeams} totalPages={totalPages} />;
};
