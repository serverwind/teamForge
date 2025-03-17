import notFoundImg from "../../assets/404.svg"
import { Header } from "../../components/ui/Header";
import { Sidebar } from "../../components/ui/Sidebar";
import { useState } from "react";

export const PageNotFound = () => {
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
    <div className="sm:px-4 py-12 my-20 sm:max-w-lg bg-white mx-auto rounded">
      <img className="mx-auto rounded" src={notFoundImg} alt="Not Found" />
      <h2 className="text-center font-bold text-3xl text-lightRed my-4">404 Error</h2>
      <p className="text-center text-grey">Page not found</p>
    </div>
        </div>
      </section>
    </>
  );
};
