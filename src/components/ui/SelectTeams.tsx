import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterPlayersByTeam } from "../../store/playersReducer";

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
  const [selectedTeams, setSelectedTeams] = useState<Team[]>([]);
  const [chosenPlayers, setChosenPlayers] = useState<Player[]>([]);
  const [expand, setExpand] = useState(false);
  const dispatch = useDispatch();
  const isHidden = expand && selectedTeams.length > 2;

  const handleFilter = () => {
    toggleFilter(!filter);
  };

  useEffect(() => {
    dispatch(filterPlayersByTeam(chosenPlayers));
  }, [chosenPlayers, dispatch]);

  const handleSelect = (event) => {
    const chosenTeamId = Number(event.target.value);
    teams.find((team: Team) => {
      if (team.id === chosenTeamId && !selectedTeams.some((t) => t.id === team.id)) {
        setSelectedTeams([...selectedTeams, { id: team.id, name: team.name }]);
      }
    });
    players.forEach((player: Player) => {
      if (player.teamId === chosenTeamId) {
        setChosenPlayers((prevPlayers) => [...prevPlayers, player]);
      }
    })
  };

 const handleExpand = () => {
   setExpand(!expand);
 }

  const handleRemove = (event) => {
    const chosenTeamId = Number(event.target.value);
    setSelectedTeams(selectedTeams.filter((team) => team.id !== chosenTeamId));
    setChosenPlayers(chosenPlayers.filter((player) => player.teamId !== chosenTeamId));
  };

  return (
    <div className="sm:flex justify-end gap-4">
      <div className={filter ? "flex flex-row items-center bg-white border border-lightestGrey pl-1 h-10 w-max rounded relative" : "hidden"}>
        <div className={selectedTeams.length > 0 ? "grid grid-cols-[auto_auto_auto] gap-2" : "hidden" }>
          {selectedTeams.slice(0, 2).map((team: Team) => (
            <div className="bg-red text-white p-2 h-8 rounded flex items-center gap-2" key={team.id}>
              {team.name}
              <button value={team.id} onClick={(event) => handleRemove(event)}>×</button>
            </div>
          ))}
        </div>
        {selectedTeams.length > 2 ? <div className="bg-red text-white p-2 h-8 rounded flex items-center gap-2 cursor-pointer" onClick={handleExpand}>...</div> : null}
        <select onChange={(event) => handleSelect(event)} className="w-4 h-8 px-4 text-white bg-white bg-chevron bg-center bg-no-repeat cursor-pointer">
          <option value="">[Select team]</option>
          {teams.map((team) =>
            selectedTeams.includes(team) ? null : (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            )
          )}
        </select>
        <div className={isHidden ? "flex flex-row flex-wrap gap-2 bg-white border border-lightestGrey p-1 rounded absolute top-11 right-0 w-full" : "hidden"}>
          {selectedTeams.slice(2).map((team: Team) => (
            <div className="bg-red text-white p-2 h-8 rounded flex items-center gap-2" key={team.id}>
              {team.name}
              <button value={team.id} onClick={(event) => handleRemove(event)} className="cursor-pointer">×</button>
            </div>
          ))}
      </div>
      </div>
      <button onClick={handleFilter} className="bg-red text-white px-4 py-2 h-10 rounded hover:bg-lightRed transition duration-300">{ filter ? "Hide" : "Add +" }</button>
    </div>
  );
};
