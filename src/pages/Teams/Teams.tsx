import { Header } from "../../components/ui/Header";
import { Sidebar } from "../../components/ui/Sidebar";
import { useState } from "react";
import { Search } from "../../components/ui/Search";

export const Teams = ({teams}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <section className="sm:grid sm:grid-cols-[10%_90%] h-full">
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />

        <div className="my-6 sm:mx-16 py-6 px-4 sm:px-10">
          <Search />

          <div> TEAMS </div>
        </div>
      </section>
    </>
  );
};
