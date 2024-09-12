import { useDispatch } from "react-redux";
import { Logouts } from "../features/app/userSlice";
import { Logout } from "../services/apiCities";

export function HandelLogouts() {
  const dispatch = useDispatch();

  const handelLogout = async () => {
    try {
      const data = await Logout();
      dispatch(Logouts());
    } catch (err) {
      console.log(err);
    }
  };
  return { handelLogout };
}
