import { useEffect } from "react";
import { useUser } from "../context/UserContext";
import { getMe } from "../services/apiCities";

export function Getusers() {
  const { dispatch } = useUser();
  useEffect(
    function () {
      async function getUser() {
        try {
          const user = await getMe();
          if (user.status === 200) {
            dispatch({ type: "User/Getuser", payload: user.data.data.doc });
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
}
