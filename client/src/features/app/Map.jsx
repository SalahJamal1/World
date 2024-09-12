import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import { HandelPostion } from "../../hooks/Getposition";
import { redirect, useNavigate, useSearchParams } from "react-router-dom";
function Map() {
  const [position, setPosition] = useState([51.505, -0.09]);
  const [SearchParams] = useSearchParams();
  const lat = SearchParams.get("lat");
  const lng = SearchParams.get("lng");
  const { positions, loader, getPosition } = HandelPostion();
  useEffect(
    function () {
      if (positions.lat) setPosition([positions.lat, positions.lng]);
    },
    [positions]
  );
  useEffect(
    function () {
      if (lat && lng) setPosition([lat, lng]);
    },
    [lat, lng]
  );
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      className="relative"
    >
      <button
        onClick={getPosition}
        className="z-[999] absolute right-[50%] uppercase bg-green-400 font-semibold text-sm px-2 py-1 rounded-lg shadow-md cursor-pointer bottom-16"
      >
        {loader ? "loading..." : "get position"}
      </button>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <ChangeCenter position={position} />
      <ChangeDetect />
    </MapContainer>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
function ChangeDetect() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;
