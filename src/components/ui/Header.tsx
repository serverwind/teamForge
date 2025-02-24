import logo from "../../assets/logo.svg";
import profileImg from "../../assets/profile.svg";

export const Header = () => {
  return (
    <header className="bg-white shadow-inner py-4 sm:px-12 flex sm:justify-between justify-center">
      <img src={logo} alt="TeamForge Logo" />
      <div className="hidden sm:flex items-center gap-4">
        <span className="ml-2 text-darkGrey text-sm">Alex Lestra</span>
        <img src={profileImg} alt="Profile" />
      </div>
    </header>
  );
}
