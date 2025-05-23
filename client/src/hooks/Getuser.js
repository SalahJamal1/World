import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Getuser } from "../components/userSlice";

export function Getusers() {
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(Getuser());
    },
    [dispatch]
  );
}
