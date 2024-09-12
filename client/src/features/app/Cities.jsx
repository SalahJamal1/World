import { useCities } from "../../context/CitiesContext";
import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import City from "./City";
import Empty from "./Empty";

function Cities() {
  const { cities, loading } = useCities().value;
  if (loading) return <Loading />;
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
