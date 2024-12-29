import React from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

function Map() {
  const navigate = useNavigate();
  const [searchParam, setSearchParams] = useSearchParams();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <p>
        position: {lat} , {lng}
      </p>
      <button
        onClick={() => {
          setSearchParams({ lat: 20, lng: 40 });
        }}
      >
        change position
      </button>
    </div>
  );
}

export default Map;
