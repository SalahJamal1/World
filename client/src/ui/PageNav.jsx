import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { HandelLogouts } from "../hooks/Signout";
import { MdClose, MdMenu } from "react-icons/md";
import { useState } from "react";
import { useUser } from "../context/UserContext";

function PageNav() {
  const { user } = useUser();
  const { handelLogout } = HandelLogouts();
  const [isOpen, setIsOpen] = useState(null);
  return (
    <header className="flex items-center justify-between px-14 py-8 flex-wrap">
      <Logo />
      <nav className="sm:hidden xs:hidden md:block lg:block xl:block">
        <ul className="flex items-center space-x-6">
          <li>
            <NavLink
              to="/pricing"
              className="text-slate-100 uppercase tracking-wide"
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
              onClick={(e) => {
                if (user.name) {
                  e.preventDefault();
                  handelLogout();
                }
              }}
              className="text-slate-900 font-semibold uppercase tracking-wide bg-green-600 px-4 py-2 rounded-lg"
            >
              {user.name ? "Logout" : "Login"}
            </Link>
          </li>
        </ul>
      </nav>
      <NavBar isOpen={isOpen} handelLogout={handelLogout} user={user} />
      <span
        onClick={() => setIsOpen((s) => !s)}
        className="sm:opacity-1 xs:opacity-1 md:hidden lg:hidden xl:hidden"
      >
        {isOpen ? (
          <>
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                backgroundColor: "rgba(20, 20, 20, 0.6)",
                height: "100%",
                width: "100%",
                zIndex: 1,
              }}
            ></div>
            <MdClose className="text-4xl fixed top-6 right-6 text-slate-100 z-[999]" />
          </>
        ) : (
          <MdMenu className="text-4xl text-slate-100" />
        )}
      </span>
    </header>
  );
}

export default PageNav;

function NavBar({ isOpen, user, handelLogout }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        height: "100%",
        width: "100%",
        paddingTop: "5rem",
        paddingLeft: "7rem",
        backdropFilter: "blur(10px)",
        zIndex: 999,
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "translateX(0%)" : "translateX(-100%)",
        transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
      }}
    >
      <ul className="flex gap-[2rem] flex-col">
        <li>
          <NavLink
            to="/pricing"
            className="text-slate-700 font-semibold uppercase tracking-wide"
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product"
            className="text-slate-700 uppercase font-semibold  tracking-wide"
          >
            Product
          </NavLink>
        </li>
        <li>
          <Link
            to="/login"
            onClick={(e) => {
              if (user.name) {
                e.preventDefault();
                handelLogout();
              }
            }}
            className="text-slate-900 font-semibold uppercase tracking-wide bg-green-600 px-4 py-2 rounded-lg"
          >
            {user.name ? "Logout" : "Login"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
