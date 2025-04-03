import { Header } from "../../components/ui/Header";
import { Sidebar } from "../../components/ui/Sidebar";
import { PlayerCard } from "../../components/ui/PlayerCard";
import { Pagination } from "../../components/ui/Pagination";
import { useState, useEffect } from "react";
import { Search } from "../../components/ui/Search";
import { searchPlayers } from "../../store/playersReducer";
import { NotFound } from "../../components/ui/NotFound";
import { SelectItemsAmount } from "../../components/ui/SelectItemsAmount";
import { SelectTeams } from "../../components/ui/SelectTeams";
import notFoundImg from "../../assets/player.png";

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

export const Players = ({ players, filteredPlayers, teams, totalPages, currentPage, setCurrentPage }: PlayersProps) => {
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
          <div className="flex flex-col sm:grid sm:grid-cols-[1fr_2fr] gap-4 sm:flex-row sm:justify-between">
            <Search setCurrentPage={setCurrentPage} search={searchPlayers} />
            <SelectTeams teams={teams} players={players} />
          </div>
          {players.length === 0 && <NotFound img={notFoundImg} text="No players found" />}
          <section className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-4">
            <PlayerCard players={filteredPlayers.length != 0 ? filteredPlayers : players} teams={teams} currentPage={currentPage} animate={animate} />
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
