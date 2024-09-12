import { useSearchParams } from "react-router-dom";

export function useLocations() {
  const [SearchParams] = useSearchParams();
  const lat = SearchParams.get("lat");
  const lng = SearchParams.get("lng");
  return { lat, lng };
}
