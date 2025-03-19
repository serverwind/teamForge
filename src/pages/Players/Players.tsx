import { Header } from "../../components/ui/Header";
import { Sidebar } from "../../components/ui/Sidebar";
import { PlayerCard } from "../../components/ui/PlayerCard";
import { Pagination } from "../../components/ui/Pagination";
import { useState, useEffect } from "react";
import { Search } from "../../components/ui/Search";
import { searchPlayers } from "../../store/playersReducer";
import { ConfirmButton } from "../../components/ui/ConfirmButton";
import { Link } from "react-router-dom";
import { NotFound } from "../../components/ui/NotFound";
import { SelectItemsAmount } from "../../components/ui/SelectItemsAmount";

interface PlayersProps {
  players: [];
  teams: [];
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

interface Player {
  id: number;
  name: string;
}

export const Players = ({ players, teams, totalPages, currentPage, setCurrentPage }: PlayersProps) => {
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
            <Search setCurrentPage={setCurrentPage} search={searchPlayers} />
            <ConfirmButton text="Add +" />
          </div>
          {players.length === 0 && <NotFound />}
          <section className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-4">
            {players.map((player: Player) => (
              <div key={`${player.id}-${currentPage}`} className={`${animate ? "animate-fade-in" : ""}`}>
                <Link to={`/player/${player.id}`}>
                  <PlayerCard player={player} teams={teams} />
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
