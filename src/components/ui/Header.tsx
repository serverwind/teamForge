import logo from "../../assets/logo.svg";
import profileImg from "../../assets/profile.svg";

export const Header = () => {
  return (
    <header className="bg-white shadow-inner py-4 px-12 flex justify-between">
      <img src={logo} alt="TeamForge Logo" />
      <div className="flex items-center gap-4">
        <span className="ml-2 text-darkGrey text-sm">Alex Lestra</span>
        <img src={profileImg} alt="Profile" />
      </div>
    </header>
  );
}
