import { Header } from "../../components/ui/Header";
import { Sidebar } from "../../components/ui/Sidebar";
import { Breadcrumbs } from "../../components/ui/Breadcrumbs";
import { AttachImg } from "../../components/ui/AttachImg";
import { AddTeamForm } from "../../components/forms/AddTeamForm";
import { useState } from "react";

export const AddTeam = () => {
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
          <Breadcrumbs link="/teams" text="Teams" current="Add new team" />

          <div className="grid sm:grid-cols-[40%_60%] sm:mx-10 mt-10 gap-10 sm:gap-20">
            <AttachImg />
            <AddTeamForm />
          </div>
        </div>
      </section>
    </>
  );
};
