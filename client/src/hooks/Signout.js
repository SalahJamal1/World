import { Logout } from "../services/apiCities";
import { useUser } from "../context/UserContext";

export function HandelLogouts() {
  const { dispatch } = useUser();

  const handelLogout = async () => {
    try {
      const data = await Logout();
      if (data.status === 200) {
        dispatch({ type: "User/Logout" });
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: "User/Error", payload: err.message });
    }
  };
  return { handelLogout };
}
