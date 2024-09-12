import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../ui/Logo";
import Appnav from "./Appnav";

function Sidebar() {
  return (
    <div className="bg-slate-600 h-[95vh] flex flex-col px-4 py-6 rounded-md relative space-y-12 w-[30rem] overflow-y-scroll">
      <Appnav />
      <Outlet />
      <footer className="text-slate-100  tracking-wide h-full flex items-end justify-center">
        <p className="text-center block">
          © Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
