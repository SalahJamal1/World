import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectPage({ children }) {
  const { Auth } = useSelector((store) => store.userSlice);
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!Auth) navigate("/");
    },
    [Auth, navigate]
  );

  return Auth ? children : null;
}

export default ProtectPage;
