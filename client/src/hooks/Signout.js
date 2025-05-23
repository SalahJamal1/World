import { Logout } from "../services/apiCities";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export function HandelLogouts() {
  const { dispatch } = useUser();
  const navigate = useNavigate();

  const handelLogout = async () => {
    try {
      const data = await Logout();
      if (data.status === 200) {
        dispatch({ type: "User/Logout" });
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: "User/Error", payload: err.message });
    }
  };
  return { handelLogout };
}
