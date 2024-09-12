import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCities } from "../../context/CitiesContext";
import { formatdate } from "../../utils/helpers";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";

function CityName() {
  const { city, loaderCity, errroCity } = useCities().value;
  const { getCity } = useCities();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(
    function () {
      getCity(id);
    },
    [id, getCity]
  );
  if (loaderCity) return <Loader />;
  if (errroCity) return <Error error={errroCity} />;
  const time = city.date ? formatdate(city?.date) : null;
  return (
    <div className="bg-slate-500 rounded-md p-6 m-4 space-y-4">
      <div className="block space-y-1">
        <span className="text-slate-300 uppercase">City name</span>
        <h3 className="text-slate-100 text-2xl">
          {city.emoji} {city.cityName}
        </h3>
      </div>
      <div className="block space-y-1">
        <span className="text-slate-300 uppercase text-[12px]">
          You went to {city.cityName} on
        </span>
        <p className="text-slate-100 text-sm">{time}</p>
      </div>
      <div className="block space-y-1">
        <span className="text-slate-300 uppercase text-[12px]">Your notes</span>
        <p className="text-slate-100 text-sm">{city.notes}</p>
      </div>
      <div className="block">
        <span className="block text-slate-300 uppercase text-[12px] mb-1">
          Learn more
        </span>
        <a
          href={`https://en.wikipedia.org/wiki/${city.cityName}`}
          className="border-b border-amber-500 text-amber-500 pb-1"
        >
          Check out {city.cityName} on Wikipedia →
        </a>
      </div>
      <button
        className="px-4 py-1 rounded-md border border-slate-100 text-slate-100"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
    </div>
  );
}

export default CityName;
