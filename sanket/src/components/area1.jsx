import React from 'react';
import { MapContainer, TileLayer, Marker, Popup,Polygon} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';



const Area1 = () => {
  const center = [26.1140549, 91.723979]; // Initial center coordinates
  const zoom = 16; // Initial zoom level

  const polygonCoords = [
    [26.1143, 91.7249],
            [26.1126, 91.7245],
            [26.1127, 91.7221],
            [26.1121, 91.7212],
            [26.1150, 91.7217]
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
          25% Completed
        </Popup>
      </Marker>
    </MapContainer>
    </div>
    </div>
  );
};

export default Area1;