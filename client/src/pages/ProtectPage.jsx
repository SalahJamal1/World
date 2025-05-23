import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Loading from "../ui/Loading";

function ProtectPage({ children }) {
  const { Auth, loader } = useUser();
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const navigate = useNavigate();
  useEffect(
    function () {
      if (Auth === undefined) return;
      else if (!Auth && loader && !isAuthChecked) {
        navigate("/");
      }
      setIsAuthChecked(true);
    },
    [Auth, navigate, loader, isAuthChecked]
  );

  if (!isAuthChecked) return <Loading />;
  return loader ? children : null;
}

export default ProtectPage;
