import { Header } from "../../components/ui/Header";
import { Sidebar } from "../../components/ui/Sidebar";
import { TeamCard } from "../../components/ui/TeamCard";
import { useState } from "react";
import { Search } from "../../components/ui/Search";
import { ConfirmButton } from "../../components/ui/ConfirmButton";

interface TeamsProps {
  teams: [];
  totalPages: number;
}

interface Team {
  id: number;
  name: string;
  division: string;
  conference: string;
  year: string;
  logo: string;
}

export const Teams = ({ teams, totalPages }: TeamsProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <section className="sm:grid sm:grid-cols-[10%_90%] h-full">
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
        <div className="my-4 sm:my-6 sm:mx-16 sm-4 sm:py-6 px-2 sm:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <Search />
            <ConfirmButton text="Add +" />
          </div>
          <section className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            {teams.map((team: Team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </section>
        </div>
      </section>
    </>
  );
};
