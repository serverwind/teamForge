import { Header } from "../../components/ui/Header";
import { Sidebar } from "../../components/ui/Sidebar";
import { TeamCard } from "../../components/ui/TeamCard";
import { Pagination } from "../../components/ui/Pagination";
import { useState, useEffect } from "react";
import { Search } from "../../components/ui/Search";
import { searchTeams } from "../../store/teamsReducer";
import { ConfirmButton } from "../../components/ui/ConfirmButton";
import { Link } from "react-router-dom";
import { NotFound } from "../../components/ui/NotFound";
import { SelectItemsAmount } from "../../components/ui/SelectItemsAmount";

interface TeamsProps {
  teams: [];
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

interface Team {
  id: number;
  name: string;
  division: string;
  conference: string;
  year: string;
  logo: string;
}

export const Teams = ({ teams, totalPages, currentPage, setCurrentPage }: TeamsProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timer);
  }, [currentPage]);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <section className="sm:grid sm:grid-cols-[10%_90%] h-full">
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
        <div className="my-4 sm:my-6 sm:mx-16 sm-4 sm:py-6 px-2 sm:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <Search setCurrentPage={setCurrentPage} search={searchTeams} />
            <ConfirmButton text="Add +" />
          </div>
          {teams.length === 0 && <NotFound />}
          <section className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-4">
            {teams.map((team: Team) => (
              <div key={`${team.id}-${currentPage}`} className={`${animate ? "animate-fade-in" : ""}`}>
                <Link to={`/team/${team.id}`}>
                  <TeamCard team={team} />
                </Link>
              </div>
            ))}
          </section>
          <div className="flex justify-between">
            <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <SelectItemsAmount setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </section>
    </>
  );
};
