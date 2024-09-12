import { useState } from "react";
import toast from "react-hot-toast";

export function HandelPostion() {
  const [positions, setPosition] = useState("");
  const [loader, setloader] = useState(false);

  function getPosition() {
    setloader(true);
    navigator.geolocation.getCurrentPosition(
      (e) => {
        const { longitude, latitude } = e.coords;
        setPosition({ lat: latitude, lng: longitude });
        setloader(false);
      },
      () => toast.error("How can I help you ?")
    );
  }
  return { positions, loader, getPosition };
}
