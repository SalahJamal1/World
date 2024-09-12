import { useEffect } from "react";
import { getMe } from "../services/apiCities";
import { useDispatch } from "react-redux";
import { Getuser } from "../features/app/userSlice";

export function Getusers() {
  const dispatch = useDispatch();

  useEffect(
    function () {
      async function getCurrent() {
        try {
          const data = await getMe();
          dispatch(Getuser(data.data.data.doc));
        } catch (err) {
          console.log(err);
        }
      }
      getCurrent();
    },
    [dispatch]
  );
}
