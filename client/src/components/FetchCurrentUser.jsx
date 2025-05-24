import { useEffect } from "react";
import { useUser } from "../context/UserContext";
import { getMe } from "../services/apiCities";

export default function FetchCurrentUser() {
  const { dispatch } = useUser();
  useEffect(
    function () {
      async function getUser() {
        dispatch({ type: "User/Loader" });
        try {
          const user = await getMe();
          if (user.status === 200) {
            dispatch({ type: "User/Getuser", payload: user.data.data.doc });
          } else {
            dispatch({ type: "User/Error", payload: "Unauthorized" });
          }
        } catch (err) {
          console.log(err);
          const errorMessage =
            err?.response?.data?.message || "An error occurred";
          dispatch({ type: "User/Error", payload: errorMessage });
        }
      }
      getUser();
    },
    [dispatch]
  );
  return null;
}
