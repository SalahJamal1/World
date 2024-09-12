import { createContext, useContext, useMemo } from "react";
import { apiCities } from "../services/apiCities";
import Getcities from "../hooks/Getcities";
import { GetCity } from "../hooks/Getcity";

const CitiesProvider = createContext();
function CitiesContext({ children }) {
  const { cities, loading, error, DeleteCity } = Getcities();
  const { getCity, city, loaderCity, errroCity } = GetCity();
  const value = useMemo(
    function () {
      return {
        cities,
        loading,
        error,
        city,
        loaderCity,
        errroCity,
      };
    },
    [cities, loading, error, city, loaderCity, errroCity]
  );
  return (
    <CitiesProvider.Provider value={{ value, getCity, DeleteCity }}>
      {children}
    </CitiesProvider.Provider>
  );
}

export const useCities = () => {
  const x = useContext(CitiesProvider);
  if (x === undefined) throw new Error("unkown");
  return x;
};
export default CitiesContext;
