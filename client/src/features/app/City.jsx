import { Link } from "react-router-dom";
import { formatdate } from "../../utils/helpers";
import { useCities } from "../../context/CitiesContext";

function City({ city }) {
  const { DeleteCity } = useCities();
  const handelDelete = (e) => {
    e.preventDefault();
    DeleteCity(city._id);
  };
  return (
    <Link to={`${city._id}?lat=${city.position.lat}&lng=${city.position.lng}`}>
      <li className="flex items-center border border-green-500 px-2 py-1 rounded-2xl border-l-green-500 border-l-8 justify-between flex-wrap space-x-2 space-y-1">
        <span className="text-3xl">{city.emoji}</span>
        <span className="text-sm text-slate-100 font-semibold">
          {city.cityName}
        </span>
        <span className="text-sm text-slate-100">{formatdate(city.date)}</span>
        <button
          onClick={handelDelete}
          className="border-none bg-slate-500 px-2 py-1 rounded-full text-[12px]"
        >
          ❌
        </button>
      </li>
    </Link>
  );
}

export default City;
