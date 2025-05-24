import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Loading from "../ui/Loading";

function ProtectPage({ children }) {
  const { Auth, loader } = useUser();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!loader) return;
      if (!Auth && !loader) {
        navigate("/");
      }
    },
    [Auth, navigate, loader]
  );
  if (!Auth && loader) return <Loading />;
  return loader ? children : null;
}

export default ProtectPage;
