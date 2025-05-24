import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Loading from "../ui/Loading";

function ProtectPage({ children }) {
  const { Auth, loader, user } = useUser();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!loader) return;
      if (!Auth && !loader) {
        navigate("/");
      }
    },
    [Auth, navigate, loader, user]
  );
  if (loader) return <Loading />;
  return Auth ? children : null;
}

export default ProtectPage;
