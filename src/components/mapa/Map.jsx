import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    if (map) {
      L.marker([51.5, -0.09]).addTo(map);
    }
  }, [map]);

  return <div style={{ height: "400px" }} ref={mapContainer} />;
};
export default Map;
