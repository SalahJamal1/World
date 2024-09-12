import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import { HandelLogouts } from "../hooks/Signout";
import User from "../features/app/User";

function PageNav() {
  const { user } = useSelector((store) => store.userSlice);
  const { handelLogout } = HandelLogouts();
  return (
    <nav className="nav flex items-center justify-between px-14 py-8">
      <Logo />
      <ul className="flex items-center space-x-6">
        <li>
          <NavLink
            to="/pricing"
            className="text-slate-100 uppercase  tracking-wide"
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product"
            className="text-slate-100 uppercase  tracking-wide"
          >
            Product
          </NavLink>
        </li>
        <li>
          {user.name ? (
            <User />
          ) : (
            <Link
              to="/login"
              className="text-slate-900 font-semibold uppercase tracking-wide bg-green-600 px-4 py-2 rounded-lg"
            >
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
