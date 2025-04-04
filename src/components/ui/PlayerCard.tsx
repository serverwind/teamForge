import { Link } from "react-router-dom";

interface Player {
  id: number;
  teamId: number;
  name: string;
  photo: string;
  number: string;
}

interface Teams {
  id: number;
  name: string;
}

interface PlayerProps {
  player: Player;
  teams: Teams[];
}

export const PlayerCard = ({ players, teams, currentPage, animate }: PlayerProps) => {
  return (
    <>
      {players.map((player: Player) => (
        <div key={`${player.id}-${currentPage}`} className={`${animate ? "animate-fade-in" : ""}`}>
          <Link to={`/player/${player.id}`}>
            <div>
              <div className="bg-gradientGray rounded-t text-center pt-16">
                <img src={player.photo} alt={player.name} className="h-36 mx-auto" />
              </div>
              <div className="bg-dark text-center px-2 py-4 sm:py-6 rounded-b h-24 flex flex-col gap-2 justify-center">
                <div key={player.id} className="text-xs sm:text-sm text-white font-bold flex gap-2 justify-center sm:text-lg">
                  <span>{player.name}</span>
                  <span className="text-lightRed">#{player.number}</span>
                </div>
                <div className="text-xs text-lightGray">{teams.find((team) => team.id === player.teamId)?.name || "No Team"}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
