import { Link } from "react-router-dom";
import { formatdate } from "../utils/helpers";
import { useCities } from "../context/CitiesContext";

function City({ city }) {
  const { DeleteCity } = useCities();
  let x = false;
  const handelDelete = (e) => {
    e.preventDefault();
    DeleteCity(city._id);
    x = true;
  };
  const time = city?.date ? formatdate(city?.date) : null;

  return (
    <Link
      to={`${city?._id}?lat=${city?.position?.lat}&lng=${city?.position?.lng}`}
    >
      <li className="flex items-center border border-green-500 px-2 py-1 rounded-2xl border-l-green-500 border-l-8 justify-between flex-wrap space-x-2 space-y-1">
        <span className="lg:text-3xl text-slate-100">{city?.emoji}</span>
        <span className="lg:text-sm text-slate-100 font-semibold">
          {city?.cityName}
        </span>
        <span className="lg:text-sm text-slate-100">{time}</span>
        <button
          disabled={x}
          onClick={handelDelete}
          className="border-none bg-slate-500 px-2 py-1 rounded-full lg:text-[12px]"
        >
          ❌
        </button>
      </li>
    </Link>
  );
}

export default City;
