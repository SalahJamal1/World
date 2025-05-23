import { HandelLogouts } from "../hooks/Signout";

import { useUser } from "../context/UserContext";

function User() {
  const { user } = useUser();

  const { handelLogout } = HandelLogouts();

  return (
    <div className="sm:flex space-x-2 bg-slate-600 rounded-lg px-2 py-2 fixed top-10 right-[5%] z-[999] items-center shadow-lg xs:hidden">
      <>
        <img src={user.avatar} alt="user" className="h-12 rounded-full" />
        <h3 className="text-slate-100">Welcome,{user.name}</h3>
        <button
          className="px-2 py-1 rounded-md border border-slate-100 text-slate-100 uppercase text-sm"
          onClick={handelLogout}
        >
          Logout
        </button>
      </>
    </div>
  );
}

export default User;
