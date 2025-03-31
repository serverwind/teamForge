import groupImgInactive from "../../assets/group_person_inactive.svg";
import groupImgActive from "../../assets/group_person_active.svg";
import personImgInactive from "../../assets/person_inactive.svg";
import personImgActive from "../../assets/person_active.svg";
import logoutImg from "../../assets/input.svg";
import { CloseHamburger } from "./CloseHamburger";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const location = useLocation();
  const isTeamsActive = location.pathname === "/teams" || location.pathname.startsWith("/team/");
  const isPlayersActive = location.pathname === "/players" || location.pathname.startsWith("/player/");

  return (
    <>
      <aside className={`bg-white shadow-inner fixed inset-y-0 left-0 w-24 sm:w-32 flex flex-col items-center py-6 gap-8 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 sm:static transition-transform duration-200 ease-in-out z-20`}>
        <div className={`${isOpen ? "mt-4" : ""}`}>
        {isOpen && <CloseHamburger toggleSidebar={toggleSidebar} />}
        </div>
        <Link to="/teams">
          <img className="mx-auto" src={isTeamsActive ? groupImgActive : groupImgInactive} alt="Group" />
          <div className="text-xs mt-1">Teams</div>
        </Link>
        <Link to="/players">
          <img className="mx-auto" src={isPlayersActive ? groupImgActive : groupImgInactive} alt="Person" />
        <div className="text-xs mt-1">Players</div>
        </Link>
        <div className="absolute bottom-6">
          <img className="mx-auto" src={logoutImg} alt="Logout" />
          <button className="text-xs">Sign Out</button>
        </div>
      </aside>
      {isOpen && <div className="fixed inset-0 bg-[#000] opacity-50 sm:hidden z-10" onClick={toggleSidebar}></div>}
    </>
  );
};
