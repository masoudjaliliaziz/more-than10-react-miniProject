import React, { useEffect, useState } from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "./Button";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useCities } from "../contexts/CitiesContext";
import { map } from "leaflet";
import { useGeolocation } from "../hooks/useGeolocation";
import { UseUrlPosition } from "../hooks/useUrlPosition";

function Map() {
  const { cities } = useCities();

  //get lat and lng from url of any city that we clicked
  const [mapLat, mapLng] = UseUrlPosition();
  const [mapPosition, setMapPosition] = useState([
    35.401718382060736, 49.031097595824775,
  ]);

  //effect for syncronize map position with lat and lng that comes from url with react router
  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  //use geo location custom hook for getting our own position
  const {
    isLoading: isLoadingGeoPosition,
    getPosition,
    position: geoPosition,
  } = useGeolocation();
  //effect for syncronize the mapposition with the lat and lng that we get from usegeolocation custom hook
  useEffect(() => {
    if (geoPosition) setMapPosition([geoPosition.lat, geoPosition.lng]);
  }, [geoPosition]);

  return (
    <div className={styles.mapContainer}>
      {!geoPosition && (
        <Button type={"position"} onclick={getPosition}>
          {isLoadingGeoPosition ? "Loading" : "   use your position"}
        </Button>
      )}
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position, 6);
  return null;
}
function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
export default Map;
