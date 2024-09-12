import { useState } from "react";
import { apiCity } from "../services/apiCities";
import { useCallback } from "react";

export function GetCity() {
  const [city, setCity] = useState({});
  const [loaderCity, setLoader] = useState(false);
  const [errroCity, setErorr] = useState("");
  const getCity = useCallback(async function getCity(id) {
    try {
      setLoader(true);
      const data = await apiCity(id);
      setCity(data.data.data.doc);
      setLoader(false);
    } catch (err) {
      console.log(err);
      const errorMessage = err?.response?.data?.message || "An error occurred";
      setErorr(errorMessage);
      setLoader(false);
    }
  }, []);
  return { getCity, city, loaderCity, errroCity };
}
