import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPlayersByTeam, addSelectedTeam, removeSelectedTeam } from "../../store/playersReducer";

interface Team {
  id: number;
  name: string;
}

interface Player {
  id: number;
  name: string;
  teamId: number;
  number: string;
  photo: string;
}

interface SelectTeamsProps {
  teams: Team[];
  players: Player[];
}

export const SelectTeams = ({ teams, players }: SelectTeamsProps) => {
  const [filter, toggleFilter] = useState(false);
  const selectedTeams = useSelector((state) => state.players.selectedTeams);
  const chosenPlayers = useSelector((state) => state.players.filteredPlayers);
  const [expand, setExpand] = useState(false);
  const dispatch = useDispatch();
  const isHidden = expand && selectedTeams.length > 2;

  const handleFilter = () => {
    toggleFilter(!filter);
  };

  const handleSelect = (event) => {
    const chosenTeamId = Number(event.target.value);
    teams.find((team: Team) => {
      if (team.id === chosenTeamId && !selectedTeams.some((t) => t.id === team.id)) {
        dispatch(addSelectedTeam(team));
      }
    });
    players.forEach((player: Player) => {
      if (player.teamId === chosenTeamId) {
        dispatch(filterPlayersByTeam(player));
      }
    })
  };

 const handleExpand = () => {
   setExpand(!expand);
 }

  const handleRemove = (event) => {
    const chosenTeamId = Number(event.target.value);
    dispatch(removeSelectedTeam(chosenTeamId));
    dispatch(filterPlayersByTeam(chosenPlayers.filter((player) => player.teamId !== chosenTeamId)));
  };

  return (
    <div className="sm:flex justify-end gap-4">
      <div className={filter ? "flex sm:flex-row flex-col sm:items-center bg-white border border-lightestGrey p-1 sm:pl-1 sm:py-0 sm:pr-0 mb-4 sm:mb-0 sm:h-10 min-h-10 w-full sm:w-max rounded sm:relative" : "hidden"}>
        <div className={selectedTeams.length > 0 ? "grid sm:grid-cols-[auto_auto_auto] gap-2" : "hidden" }>
          {selectedTeams.slice(0, 2).map((team: Team) => (
            <div className="bg-red text-white p-2 h-8 rounded flex items-center gap-2" key={team.id}>
              {team.name}
              <button value={team.id} onClick={(event) => handleRemove(event)} className="ml-auto">×</button>
            </div>
          ))}
        </div>
        {selectedTeams.length > 2 ? <div className="bg-red text-white p-2 h-8 rounded flex items-center mt-2 sm:mt-0 gap-2 cursor-pointer order-last sm:order-none" onClick={handleExpand}>...</div> : null}
        <select onChange={(event) => handleSelect(event)} className="w-full h-10 sm:w-4 sm:h-8 px-4 order-first sm:order-none text-white bg-white bg-chevron bg-right sm:bg-center bg-no-repeat cursor-pointer">
          <option value="">[Select team]</option>
          {teams.map((team) =>
            selectedTeams.includes(team) ? null : (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            )
          )}
        </select>
        <div className={isHidden ? "flex flex-col sm:flex-row flex-wrap gap-2 bg-white sm:border border-lightestGrey mt-2 sm:mt-0 sm:p-1 rounded sm:absolute top-11 right-0 w-full" : "hidden"}>
          {selectedTeams.slice(2).map((team: Team) => (
            <div className="bg-red text-white p-2 h-8 rounded flex items-center gap-2" key={team.id}>
              {team.name}
              <button value={team.id} onClick={(event) => handleRemove(event)} className="ml-auto">×</button>
            </div>
          ))}
      </div>
      </div>
      <button onClick={handleFilter} className="bg-red text-white px-4 py-2 h-10 rounded hover:bg-lightRed transition duration-300 w-full sm:w-auto">{ filter ? "Hide" : "Add +" }</button>
    </div>
  );
};
