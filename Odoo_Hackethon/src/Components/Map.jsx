import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const center = [51.505, -0.09]; // Initial map center coordinates
  const zoom = 13; // Initial map zoom level
  const markers = [
    { lat: 51.505, lng: -0.09 },
    { lat: 51.51, lng: -0.1 },
    { lat: 51.495, lng: -0.1 },
  ];

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Add markers dynamically */}
      {markers.map((marker, index) => (
        <Marker key={index} position={[marker.lat, marker.lng]}>
          <Popup>
            Marker {index + 1}. <br /> Coordinates: {marker.lat}, {marker.lng}.
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
