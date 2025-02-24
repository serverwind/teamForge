import groupImg from "../../assets/group_person.svg";
import personImg from "../../assets/person.svg";
import logoutImg from "../../assets/input.svg";
import { Hamburger } from "./Hamburger";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <>
      <aside className={`bg-white shadow-inner fixed inset-y-0 left-0 w-24 sm:w-32 flex flex-col items-center py-6 gap-8 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 sm:static transition-transform duration-200 ease-in-out z-20`}>
        {isOpen && <Hamburger toggleSidebar={toggleSidebar} />}
        <div className={`${isOpen ? "mt-6" : ""}`}>
          <img className="mx-auto" src={groupImg} alt="Group" />
          <span className="text-xs">Teams</span>
        </div>
        <div>
          <img className="mx-auto" src={personImg} alt="Person" />
          <span className="text-xs">Players</span>
        </div>
        <div className="absolute bottom-6">
          <img className="mx-auto" src={logoutImg} alt="Logout" />
          <span className="text-xs">Sign Out</span>
        </div>
      </aside>
      {isOpen && <div className="fixed inset-0 bg-[#000] opacity-50 sm:hidden z-10" onClick={toggleSidebar}></div>}
    </>
  );
};
