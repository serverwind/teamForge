import { Header } from "../../components/ui/Header";
import { Sidebar } from "../../components/ui/Sidebar";
import { useState } from "react";

export const Teams = ({teams}) => {
  console.log(teams)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <section className="sm:grid sm:grid-cols-[10%_90%] h-full">
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />

        <div className="bg-white my-6 sm:mx-16 py-6 px-4 sm:px-10 rounded-md">
          <div> TEAMS </div>
        </div>
      </section>
    </>
  );
};
