import React, { useEffect, useState } from "react";
import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useCities } from "../contexts/CitiesContext";
import { map } from "leaflet";

function Map() {
  const { cities } = useCities();
  const [searchParam] = useSearchParams();
  const mapLat = searchParam.get("lat");
  const mapLng = searchParam.get("lng");

  const [mapPosition, setMapPosition] = useState([40, 40]);
  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={8}
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
      </MapContainer>
    </div>
  );
}
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
export default Map;
