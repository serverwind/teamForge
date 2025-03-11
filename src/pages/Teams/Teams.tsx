import { Header } from "../../components/ui/Header";
import { Sidebar } from "../../components/ui/Sidebar";
import { useState } from "react";
import { Search } from "../../components/ui/Search";
import { ConfirmButton } from "../../components/ui/ConfirmButton";

export const Teams = ({ teams }) => {
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
            {teams.map((team) => (
              <div>
                <div className="bg-gradientGray rounded-t text-center py-12">
                  <img src={team.logo} alt={team.name} className="w-36 h-36 mx-auto" />
                </div>
                <div className="bg-dark text-center px-2 py-4 sm:py-6 rounded-b">
                  <div key={team.id} className="text-sm text-white font-bold mb-2">
                    {team.name}
                  </div>
                  <div className="text-xs text-lightGray">Year of foundation: {team.year}</div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </>
  );
};
