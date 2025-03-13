import { Header } from "../../components/ui/Header";
import { Sidebar } from "../../components/ui/Sidebar";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

interface Team {
  id: number;
  name: string;
}

interface Teams {
  teams: Team[];
}

export const Team = () => {
  const { id } = useParams();
  const team = useSelector((state: { teams: Teams }) => state.teams.teams.find((team: Team) => team.id === Number(id)));

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
        <div className="my-4 sm:my-6 sm:mx-16 sm-4 sm:py-6 px-2 sm:px-10">{team.name}</div>
        <section className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-4"></section>
      </section>
    </>
  );
};
