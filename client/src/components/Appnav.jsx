import { NavLink } from "react-router-dom";
import Logo from "../ui/Logo";

function Appnav() {
  return (
    <nav className="appnav space-y-12 flex flex-col items-center justify-center ">
      <Logo />
      <ul className="flex space-x-4 items-center justify-center  rounded-full bg-slate-500 py-1  overflow-hidden">
        <li>
          <NavLink
            to="cities"
            className="text-slate-100 tracking-wide px-5 py-6"
          >
            Cities
          </NavLink>
        </li>
        <li>
          <NavLink
            to="countries"
            className="text-slate-100  tracking-wide px-2 py-6"
          >
            Countries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Appnav;
