import { HandelLogouts } from "../hooks/Signout";

import { useUser } from "../context/UserContext";

function User() {
  const { user } = useUser();

  const { handelLogout } = HandelLogouts();

  return (
    <div className="flex space-x-2 bg-slate-600 rounded-lg px-2 py-2 fixed top-10 sm:right-[5%] z-[9999] items-center shadow-lg xs:left-[5%]">
      <img
        src={user.avatar}
        alt="user"
        className="sm:h-12 xs:h-8 rounded-full"
      />
      <h3 className="text-slate-100 xs:text-[10px]">Welcome,{user.name}</h3>
      <button
        className="sm:px-2  sm:py-1 xs:p-1 rounded-md border border-slate-100 text-slate-100 uppercase sm:text-sm xs:text-[10px]"
        onClick={handelLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default User;
