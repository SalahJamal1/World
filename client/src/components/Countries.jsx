import { useCities } from "../context/CitiesContext";
import Error from "../ui/Error";
import Loader from "../ui/Loader";
import Country from "./Country";
import Empty from "./Empty";

function Countries() {
  const { cities, loading, error } = useCities().value;

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  if (!cities.length) return <Empty />;

  return (
    <ul className="grid grid-cols-2 space-x gap-6 overflow-y-scroll h-[70vh]">
      {cities.map((country, i) => (
        <Country country={country} key={i} />
      ))}
    </ul>
  );
}

export default Countries;
