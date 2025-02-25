import closeImg from "../../assets/close.svg";

interface CloseHamburgerProps {
  toggleSidebar: () => void;
}

export const CloseHamburger = ({ toggleSidebar }: CloseHamburgerProps) => {
  return <img className="cursor-pointer sm:hidden w-4 mx-auto" src={closeImg} alt="Close" onClick={toggleSidebar} />;
};
