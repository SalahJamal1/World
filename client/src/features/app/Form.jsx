// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocations } from "../../hooks/useLocations";
import { useCities } from "../../context/CitiesContext";
import Loading from "../../ui/Loading";
import Error from "../../ui/Error";

function Form() {
  const { ADDCity } = useCities();
  const navigate = useNavigate();

  const { lat, lng } = useLocations();
  const [cityName, setcityName] = useState("");
  const [country, setcountry] = useState("");
  const [emoji, setemoji] = useState("");
  const [notes, setnotes] = useState("");
  const [date, setdate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      // if (lat && lng) {
      async function getCurrent() {
        setLoading(true);
        try {
          const { data } = await axios(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
          );
          setcityName(data.city);
          setemoji(data.countryCode);
          setcountry(data.countryName);
          setLoading(false);
        } catch (err) {
          console.log(err);
          setError(err.data.respone.message);
        }
      }
      getCurrent();
      // }
    },
    [lat, lng]
  );
  const handelAddCity = (e) => {
    e.preventDefault();
    const newCity = {
      cityName,
      country,
      emoji,
      notes,
      date,
      position: {
        lat,
        lng,
      },
    };
    ADDCity(newCity);
    navigate("/app/cities");
  };
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <form className="flex flex-col bg-slate-500 rounded-lg shadow-2xl py-6 px-6">
      <div className="flex flex-col relative">
        <label htmlFor="name" className="text-slate-100 text-base mb-1">
          City name
        </label>
        <input
          type="text"
          id="name"
          required
          className="rounded-md h-8 bg-slate-300 mb-4 outline-none text-slate-500 px-2 placeholder:text-slate-400"
          value={cityName}
          onChange={(e) => setcityName(e.target.value)}
        />
        <span className="absolute text-slate-500 top-8 right-2">{emoji}</span>
      </div>
      <label htmlFor="date" className="text-slate-100 text-base mb-1">
        When did you go to {cityName}?
      </label>
      <input
        type="date"
        id="date"
        required
        className="rounded-md h-8 bg-slate-300 mb-6 outline-none text-slate-500 px-2 placeholder:text-slate-400"
        value={date}
        onChange={(e) => setdate(e.target.value)}
      />
      <label htmlFor="notes" className="text-slate-100 text-base mb-1">
        Notes about your trip to
      </label>
      <input
        type="text"
        id="notes"
        required
        className="rounded-md h-16 bg-slate-300 mb-6 outline-none text-slate-500 px-2 placeholder:text-slate-400"
        value={notes}
        onChange={(e) => setnotes(e.target.value)}
      />
      <div className="flex justify-between">
        <button
          className="px-4 py-1 bg-green-500 rounded-md"
          onClick={handelAddCity}
        >
          Add
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          className="px-4 py-1 rounded-md border border-slate-100 text-slate-100"
        >
          ← Back
        </button>
      </div>
    </form>
  );
}

export default Form;
