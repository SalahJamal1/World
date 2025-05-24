import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Loading from "../ui/Loading";

function ProtectPage({ children }) {
  const { Auth, loader, err } = useUser();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!loader && !err) return;
      if ((!Auth && !loader) || err === "please Login") {
        navigate("/");
      }
    },
    [Auth, navigate, loader, err]
  );
  if (loader) return <Loading />;
  return Auth ? children : null;
}

export default ProtectPage;
