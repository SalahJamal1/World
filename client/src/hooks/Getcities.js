import { useEffect, useState } from "react";
import { apiADDCity, apiCities, apiDeleteCity } from "../services/apiCities";
import toast from "react-hot-toast";

function Getcities() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(function () {
    async function getCities() {
      setLoading(true);
      try {
        const data = await apiCities();
        setCities(data.data.data.doc);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err.message);
        setLoading(false);
      }
    }
    getCities();
  }, []);
  async function DeleteCity(id) {
    try {
      const data = await apiDeleteCity(id);
      setCities((s) => s.filter((el) => el._id !== id));
      toast.success("The city has been deleted");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
      setError(err.response.data.message);
    }
  }
  async function ADDCity(city) {
    try {
      const data = await apiADDCity(city);
      setCities((s) => [...s, data]);
      toast.success("The city has been Added");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
      setError(err.response.data.message);
    }
  }
  return { cities, loading, error, DeleteCity, ADDCity };
}

export default Getcities;
