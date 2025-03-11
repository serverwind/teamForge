import { Header } from "../../components/ui/Header";
import { Sidebar } from "../../components/ui/Sidebar";
import { useState } from "react";
import { Search } from "../../components/ui/Search";
import { ConfirmButton } from "../../components/ui/ConfirmButton";

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

        <div className="my-4 sm:my-6 sm:mx-16 sm-4 sm:py-6 px-4 sm:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <Search />
            <ConfirmButton text="Add +"/>
          </div>
          <div> TEAMS </div>
        </div>
      </section>
    </>
  );
};
