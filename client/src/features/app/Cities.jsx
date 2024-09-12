import { useCities } from "../../context/CitiesContext";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";
import City from "./City";
import Empty from "./Empty";

function Cities() {
  const { cities, loading, error } = useCities().value;
  if (loading) return <Loader />;
  if (error) return <Error error={error} />;
  if (!cities.length) return <Empty />;
  return (
    <ul className="flex flex-col space-y-4">
      {cities?.map((city, i) => (
        <City city={city} key={i} />
      ))}
    </ul>
  );
}

export default Cities;
