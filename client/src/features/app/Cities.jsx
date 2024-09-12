import { useCities } from "../../context/CitiesContext";
import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import City from "./City";
import Empty from "./Empty";

function Cities() {
  const { cities, loading, error } = useCities().value;
  if (!cities.length) return <Empty />;
  if (loading) return <Loading />;
  if (error && cities.length < 1) return <Error error={error} />;
  return (
    <ul className="flex flex-col space-y-4">
      {cities?.map((city, i) => (
        <City city={city} key={i} />
      ))}
    </ul>
  );
}

export default Cities;
