import { useCities } from "../../context/CitiesContext";
import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import Country from "./Country";
import Empty from "./Empty";

function Countries() {
  const { cities, loading } = useCities().value;

  if (loading) return <Loading />;
  if (!cities.length) return <Empty />;

  return (
    <ul className="grid grid-cols-2 space-x gap-6">
      {cities.map((country, i) => (
        <Country country={country} key={i} />
      ))}
    </ul>
  );
}

export default Countries;
