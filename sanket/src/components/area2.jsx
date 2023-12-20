import React from 'react';
import { MapContainer, TileLayer, Marker, Popup,Polygon} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';



const Area2 = () => {
  const center = [30.3518, 76.3646]; // Initial center coordinates
  const zoom = 16; // Initial zoom level

  const polygonCoords = [
    [30.3511,76.3654],
    [30.3523,76.3652],
    [30.3521,76.3639],
    [30.3512,76.3641]
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
          47% completed
        </Popup>
      </Marker>
    </MapContainer>
    </div>
    </div>
  );
};

export default Area2;