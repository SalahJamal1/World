import { useSelector } from "react-redux";
import { Getusers } from "../../hooks/Getuser";
import { HandelLogouts } from "../../hooks/Signout";

function User() {
  const { user } = useSelector((store) => store.userSlice);
  Getusers();
  const { handelLogout } = HandelLogouts();

  return (
    <div className="flex space-x-2 bg-slate-600 rounded-lg px-2 py-2 absolute top-2 right-2 z-[999] items-center shadow-lg">
      <img src={user.avatar} alt="user" className="h-12 rounded-full" />
      <h3 className="text-slate-100">Welcome,{user.name}</h3>
      <button
        className="px-2 py-1 rounded-md border border-slate-100 text-slate-100 uppercase text-sm"
        onClick={handelLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default User;
