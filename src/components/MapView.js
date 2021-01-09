import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  return (
    <MapContainer   
      center={{ lat: 27.955075974113427, lng: -15.55527684835571 }}
      zoom={10}
    >
      <TileLayer
        attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default MapView;
