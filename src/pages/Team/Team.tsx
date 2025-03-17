import { Header } from "../../components/ui/Header";
import { Sidebar } from "../../components/ui/Sidebar";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Breadcrumbs } from "../../components/ui/Breadcrumbs";

interface Team {
  id: number;
  name: string;
  year: string;
  conference: string;
  division: string;
  logo: string;
}

interface Player {
  id: number;
  name: string;
  age: number;
  teamId: number;
  height: string;
  weight: string;
  number: string;
  photo: string;
  position: string;
}

interface Players {
  players: Player[];
}

interface Teams {
  teams: Team[];
}

export const Team = () => {
  const { id } = useParams();
  const team = useSelector((state: { teams: Teams }) => state.teams.teams.find((team: Team) => team.id === Number(id)));
  const players = useSelector((state: { players: Players }) => {
    return state.players.players.filter((player: Player) => player.teamId === Number(id));
  })

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!team) {
    return <div>404 COMPONENT</div>;
  }

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <section className="sm:grid sm:grid-cols-[10%_90%] h-full">
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />

        <div className="my-4 sm:my-6 sm:mx-16 sm-4 sm:py-6 sm:px-2 sm:px-10">
        <div>
          <div className="bg-white py-4 px-2 sm:radius-t">
            <Breadcrumbs link="/teams" text="Teams" current={team.name} />
          </div>
          <div className="bg-gradientGray text-white text-center flex flex-col sm:grid sm:grid-cols-[40%_60%] sm:text-left sm:justify-center sm:items-center gap-9 py-14 sm:rounded-b">
            <img src={team.logo} alt={team.name} className="sm:w-40 w-24 mx-auto" />
            
          <div>
            <h1 className="text-lg sm:text-3xl font-bold mt-4 mb-12 sm:my-6">{team.name}</h1>
            <div className="sm:grid sm:grid-cols-2">
              <div className="sm:mb-4 mb-8"><p className="text-lg font-bold mb-1">Year of foundation</p><p className="text-sm">{team.year}</p></div>
              <div className="sm:mb-4 mb-8"><p className="text-lg font-bold mb-1">Conference</p><p className="text-sm">{team.conference}</p></div>
              <div><p className="text-lg font-bold mb-1">Division</p><p className="text-sm">{team.division}</p></div>
            </div>
          </div>

          </div>
        </div>
        <section className="bg-white my-4 sm:rounded border-t border-r border-l border-lightGray">
          <table className="overflow-x-auto w-full" cellPadding={8}>
            <colgroup>
              <col width="7%" />
              <col width="63%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
            </colgroup>
            <thead>
              <tr>
                <th colSpan={6} className="text-grey text-left font-normal border-b border-lightGray px-7 py-4">Roster</th>
              </tr>
            </thead>
            <tbody>
            <tr className="border-b border-lightGray font-bold">
              <td className="text-grey text-center text-sm">#</td>
              <td className="text-grey text-sm">Player</td>
              <td className="hidden sm:table-cell text-grey text-center text-sm">Height</td>
              <td className="hidden sm:table-cell text-grey text-center text-sm">Weight</td>
              <td className="hidden sm:table-cell text-grey text-center text-sm">Age</td>
            </tr>
                {players.map((player) => (
              <tr className="border-b border-lightGray">
                  <td className="text-grey text-center text-sm" key={player.id}>{player.number}</td>
                  <td className="flex gap-4 items-center"><img src={player.photo} alt={player.name} className="w-12 rounded-full" /><div className="flex flex-col"><span className="text-grey text-sm">{player.name}</span><span className="text-lightGray text-xs">{player.position}</span></div></td>
                  <td className="hidden sm:table-cell text-sm text-grey text-center">{player.height}</td>
                  <td className="hidden sm:table-cell text-sm text-grey text-center">{player.weight}</td>
                  <td className="hidden sm:table-cell text-sm text-grey text-center">{player.age}</td>
              </tr>
                ))}
            </tbody>
          </table>
        </section>
        </div>
      </section>
    </>
  );
};
