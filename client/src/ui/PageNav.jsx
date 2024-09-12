import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

function PageNav() {
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
          <Link
            to="/login"
            className="text-slate-900 font-semibold uppercase tracking-wide bg-green-600 px-4 py-2 rounded-lg"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
