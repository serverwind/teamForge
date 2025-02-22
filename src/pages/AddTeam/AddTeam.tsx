import { Header } from "../../components/ui/Header";
import { Sidebar } from "../../components/ui/Sidebar";
import { Breadcrumbs } from "../../components/ui/Breadcrumbs";
import { AttachImg } from "../../components/ui/AttachImg";
import { AddTeamForm } from "../../components/forms/AddTeamForm";

export const AddTeam = () => {
  return (
    <>
      <Header />
      <section className="sm:grid sm:grid-cols-[10%_90%] h-full">
        <Sidebar />

        <div className="bg-white my-6 mx-16 rounded-md">
          <Breadcrumbs link="/teams" text="Teams" current="Add new team" />

          <div className="sm:grid sm:grid-cols-[1fr_2fr] mx-20 gap-10">
            <AttachImg />
            <AddTeamForm />
          </div>
        </div>
      </section>
    </>
  );
};
