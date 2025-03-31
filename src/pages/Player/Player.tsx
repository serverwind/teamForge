import { Header } from "../../components/ui/Header";
import { Sidebar } from "../../components/ui/Sidebar";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Breadcrumbs } from "../../components/ui/Breadcrumbs";

export const Player = () => {
  const { id } = useParams();
  const player = useSelector((state) => state.players.players.find((player) => player.id === Number(id)));
  const team = useSelector((state) => state.teams.teams.find((team) => team.id === player.teamId));

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!player) {
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
            <Breadcrumbs link="/players" text="Players" current={player.name} />
          </div>
          <div className="bg-gradientGray text-white text-center flex flex-col sm:grid sm:grid-cols-[40%_60%] sm:text-left sm:justify-center sm:gap-9 gap-2 sm:rounded-b sm:items-end">
            <img src={player.photo} alt={player.name} className="sm:w-80 w-44 mx-auto pt-20" />
          <div className="pt-8 pb-12">
            <h1 className="text-lg sm:text-3xl font-bold mt-4 mb-12 sm:my-6"><span>{player.name}</span> <span className="text-lightRed">#{player.number}</span></h1>
            <div className="sm:grid sm:grid-cols-2">
              <div className="sm:mb-4 mb-8"><p className="text-lg font-bold mb-1">Position</p><p className="text-sm">{player.position}</p></div>
              <div className="sm:mb-4 mb-8"><p className="text-lg font-bold mb-1">Team</p><p className="text-sm">{team.name}</p></div>
              <div className="sm:mb-4 mb-8"><p className="text-lg font-bold mb-1">Height</p><p className="text-sm">{player.height}</p></div>
              <div className="sm:mb-4 mb-8"><p className="text-lg font-bold mb-1">Weight</p><p className="text-sm">{player.weight}</p></div>
              <div><p className="text-lg font-bold mb-1">Age</p><p className="text-sm">{player.age}</p></div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};
