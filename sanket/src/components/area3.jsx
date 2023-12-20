import React from 'react';
import { MapContainer, TileLayer, Marker, Popup,Polygon} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';



const Area3 = () => {
  const center = [12.9082, 79.0647]; // Initial center coordinates
  const zoom = 16; // Initial zoom level

  const polygonCoords = [
    [12.9054,79.0611],
    [12.9082,79.0616],
    [12.9106,79.0621],
    [12.9106,79.0642],
    [12.9101,79.0672],
    [12.9112,79.0703],
    [12.9097,79.0709],
    [12.9077,79.0668],
    [12.9077,79.0678],
    [12.9067,79.0678],
    [12.9065,79.0669],
    [12.9057,79.0668],
  ];

  const customIcon = new L.Icon({
    iconUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
    iconSize: [32, 32],
  });
  
  return (
    <div className="map">
      <div className="mapContainer">
    <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=''
      />
      <Polygon positions={polygonCoords} color="blue" />
      <Marker position={center} draggable={true}  icon={customIcon}>
        <Popup>
          49% completed
        </Popup>
      </Marker>
    </MapContainer>
    </div>
    </div>
  );
};

export default Area3;