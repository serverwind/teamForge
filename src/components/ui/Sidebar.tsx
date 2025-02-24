import groupImg from "../../assets/group_person.svg"
import personImg from "../../assets/person.svg"
import logoutImg from "../../assets/input.svg"

export const Sidebar = () => {
  return (
    <aside className="bg-white shadow-inner relative hidden sm:flex flex-col items-center py-6 gap-8">
      <div>
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
  )
}
