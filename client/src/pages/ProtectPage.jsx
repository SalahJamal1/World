import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

function ProtectPage({ children }) {
  const { Auth, loader } = useUser();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (loader && !Auth) navigate("/");
    },
    [Auth, navigate, loader]
  );

  return Auth ? children : null;
}

export default ProtectPage;
