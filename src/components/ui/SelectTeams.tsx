import { useState } from "react";

interface Team {
  id: number;
  name: string;
}

interface SelectTeamsProps {
  teams: Team[];
}

export const SelectTeams = ({ teams }: SelectTeamsProps) => {
  const [selectedTeams, setSelectedTeams] = useState<Team[]>([]);
  const handleSelect = (event) => {
    const chosenTeamId = Number(event.target.value);
    teams.find((team: Team) => {
      if (team.id === chosenTeamId && !selectedTeams.some((t) => t.id === team.id)) {
        setSelectedTeams([...selectedTeams, team]);
      }
    });
  };

  const handleRemove = (event) => {
    const chosenTeamId = Number(event.target.value);
    if (chosenTeamId === 0) return;
    setSelectedTeams(selectedTeams.filter((team) => team.id !== chosenTeamId));
  };

  return (
    <div>
      <div>
        {selectedTeams.map((team: Team) => (
          <div key={team.id}>
            {team.name}{" "}
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
  );
};
