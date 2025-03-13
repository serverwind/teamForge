interface PlayerProps {
  player: {
    id: number;
    teamId: number;
    name: string;
    photo: string;
    number: string;
  };
  teams: [{ id: number; name: string }];
}

export const PlayerCard = ({ player, teams }: PlayerProps) => {
  return (
    <div>
      <div className="bg-gradientGray rounded-t text-center pt-16">
        <img src={player.photo} alt={player.name} className="h-36 mx-auto" />
      </div>
      <div className="bg-dark text-center px-2 py-4 sm:py-6 rounded-b h-24 flex flex-col gap-2 justify-center">
        <div key={player.id} className="text-sm text-white font-bold flex gap-2 justify-center sm:text-lg">
          <span>{player.name}</span>
          <span className="text-lightRed">#{player.number}</span>
        </div>
        <div className="text-xs text-lightGray">
          {teams.map((team) => {
            if (team.id === player.teamId) return team.name;
          })}
        </div>
      </div>
    </div>
  );
};
