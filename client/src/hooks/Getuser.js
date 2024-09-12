import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Getuser } from "../features/app/userSlice";

export function Getusers() {
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(Getuser());
    },
    [dispatch]
  );
}
