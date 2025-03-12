import { useSelector } from "react-redux";
import { Teams } from "../pages/Teams/Teams";
import { RootState } from "../store/store";

export const TeamsContainer = () => {
  const teams = useSelector((state: RootState) => state.teams.teams);
  const filteredTeams = useSelector((state: RootState) => state.teams.filteredTeams);
  const searched = useSelector((state: RootState) => state.teams.searched);

  if (searched) {
    return <Teams teams={filteredTeams} />;
  }

  const displayedTeams = filteredTeams.length > 0 ? filteredTeams : teams;

  return <Teams teams={displayedTeams} />;
};
