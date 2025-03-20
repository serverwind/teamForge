import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  const [chosenTeams, setChosenTeams] = useState<Player[]>([]);
  const dispatch = useDispatch();

  const handleFilter = () => {
    toggleFilter(!filter);
  };

  const handleSelect = (event) => {
    const chosenTeamId = Number(event.target.value);
    teams.find((team: Team) => {
      if (team.id === chosenTeamId && !selectedTeams.some((t) => t.id === team.id)) {
        setSelectedTeams([...selectedTeams, { id: team.id, name: team.name }]);
      }
    });
    players.forEach((player: Player) => {
      if (player.teamId === chosenTeamId) {
        setChosenTeams((prevPlayers) => [...prevPlayers, player]);
      }
    })
    dispatch(filterPlayersByTeam(chosenTeams));
  };

  const handleRemove = (event) => {
    const chosenTeamId = Number(event.target.value);
    if (chosenTeamId === 0) return;
    setSelectedTeams(selectedTeams.filter((team) => team.id !== chosenTeamId));
  };

  return (
    <div>
      <div className={filter ? "flex flex-col gap-2" : "hidden"}>
        <div>
          {selectedTeams.map((team: Team) => (
            <div key={team.id}>
              {team.name}
              <button value={team.id} onClick={(event) => handleRemove(event)}>X</button>
            </div>
          ))}
        </div>
        <select onChange={(event) => handleSelect(event)}>
          <option value="">[Select team]</option>
          {teams.map((team) =>
            selectedTeams.includes(team) ? null : (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            )
          )}
        </select>
      </div>
      <button onClick={handleFilter} className="bg-red text-white px-4 py-2 rounded hover:bg-lightRed transition duration-300">{ filter ? "Hide" : "Add +" }</button>
    </div>
  );
};
