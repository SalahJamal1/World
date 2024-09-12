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
        const errorMessage =
          err?.response?.data?.message || "An error occurred";
        toast.error(errorMessage);
        setError(errorMessage);
        setLoading(false);
      }
    }

    getCities();
  }, []);
  async function DeleteCity(id) {
    if (!id) {
      toast.error("Invalid city ID");
      return;
    }

    try {
      const data = await apiDeleteCity(id);
      setCities((s) => s.filter((el) => el._id !== id));
      toast.success("The city has been deleted");
    } catch (err) {
      console.error(err);
      const errorMessage = err?.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
      setError(errorMessage);
    }
  }

  async function ADDCity(city) {
    try {
      setLoading(true);

      const { data } = await apiADDCity(city);
      setCities((prevCities) => [...prevCities, data.data.doc]);
      toast.success("The city has been added");
    } catch (err) {
      console.error(err);
      const errorMessage = err?.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return { cities, loading, error, DeleteCity, ADDCity };
}

export default Getcities;
