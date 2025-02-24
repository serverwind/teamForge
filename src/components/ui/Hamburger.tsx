import hamburger from "../../assets/hamburger.svg";

interface HamburgerProps {
  toggleSidebar: () => void;
}

export const Hamburger = ({ toggleSidebar }: HamburgerProps) => {
  return <img className="cursor-pointer sm:hidden absolute left-4" src={hamburger} alt="Menu" onClick={toggleSidebar} />;
};
