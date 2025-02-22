import groupImg from "../../assets/group_person.svg"
import personImg from "../../assets/person.svg"
import logoutImg from "../../assets/input.svg"

export const Sidebar = () => {
  return (
    <aside className="bg-white shadow-inner flex flex-col justify-between">
      <div>
        <img src={groupImg} alt="Group" />
        <span>Teams</span>
      </div>
      <div>
        <img src={personImg} alt="Person" />
        <span>Players</span>
      </div>
      <div>
        <img src={logoutImg} alt="Logout" />
        <span>Sign Out</span>
      </div>
    </aside>
  )
}
