import { useCities } from "../../context/CitiesContext";
import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import Country from "./Country";
import Empty from "./Empty";

function Countries() {
  const { cities, loading, error } = useCities().value;
  if (!cities.length) return <Empty />;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <ul className="grid grid-cols-2 space-x gap-6">
      {cities.map((country, i) => (
        <Country country={country} key={i} />
      ))}
    </ul>
  );
}

export default Countries;
