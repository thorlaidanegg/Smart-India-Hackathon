import Widget from "../../components/widget/Widget";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import React, { useRef, useEffect, useState } from "react";
import Area1 from "../../components/area1";
import Area2 from "../../components/area2";
import Area3 from "../../components/area3";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "DARK" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const mapRef = useRef(null);

  const center1 = [26.1140549, 91.723979];
  const center2 = [30.3518, 76.3646];
  const center3 = [12.9082, 79.0647]; // Initial center coordinates // Initial zoom level

  const polygonCoords1 = [
    [26.1143, 91.7249],
    [26.1126, 91.7245],
    [26.1127, 91.7221],
    [26.1121, 91.7212],
    [26.1150, 91.7217],
  ];

  const polygonCoords2 = [
    [30.3511, 76.3654],
    [30.3523, 76.3652],
    [30.3521, 76.3639],
    [30.3512, 76.3641],
  ];

  const polygonCoords3 = [
    [12.9054, 79.0611],
    [12.9082, 79.0616],
    [12.9106, 79.0621],
    [12.9106, 79.0642],
    [12.9101, 79.0672],
    [12.9112, 79.0703],
    [12.9097, 79.0709],
    [12.9077, 79.0668],
    [12.9077, 79.0678],
    [12.9067, 79.0678],
    [12.9065, 79.0669],
    [12.9057, 79.0668],
  ];

  const customIcon = new L.Icon({
    iconUrl:
      "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png",
    iconSize: [32, 32],
  });

  const [center, setCenter] = useState([24.0465, 78.9697]);
  const [zoom, setZoom] = useState(5); // Use state to track the center

  const [selectedArea, setSelectedArea] = useState(null);

  const handleButtonClick1 = () => {
    setSelectedArea(<Area1 />);
  };

  const handleButtonClick2 = () => {
    setSelectedArea(<Area2 />);
  };

  const handleButtonClick3 = () => {
    setSelectedArea(<Area3 />);
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="User" />
          <Widget type="Total Workers" />
          <Widget type="Area of site" />
          <Widget type="Active Workers" />
        </div>
        <div className="charts">
          <div className="places-list">
            <Box sx={{ width: "100%" }}>
              <Stack spacing={8}>
                <Item>
                  <Button
                    variant="contained"
                    onClick={() => handleButtonClick1()}
                  >
                    Site 1 -<br></br> RGU
                  </Button>
                </Item>
                <Item>
                  <Button
                    variant="contained"
                    onClick={() => handleButtonClick2()}
                  >
                    Site 2 - Thapar
                  </Button>
                </Item>
                <Item>
                  <Button
                    variant="contained"
                    onClick={() => handleButtonClick3()}
                  >
                    Site 3 - Vellore
                  </Button>
                </Item>
              </Stack>
            </Box>
          </div>

          <MapContainer
            center={center}
            zoom={zoom}
            style={{ height: "650px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution=""
            />
            <Polygon positions={polygonCoords1} color="blue" />
            <Polygon positions={polygonCoords2} color="blue" />
            <Polygon positions={polygonCoords3} color="blue" />

            <Marker position={center1} icon={customIcon}>
              <Popup>
                <b>Site 1 - RGU </b>
                <br />
                25% work done
              </Popup>
            </Marker>

            <Marker position={center2} icon={customIcon}>
              <Popup>
                <b>Site 2 - Thapar </b>
                <br />
                25% work done
              </Popup>
            </Marker>

            <Marker position={center3} icon={customIcon}>
              <Popup>
                <b>Site 3 - Vellore </b>
                <br />
                25% work done
              </Popup>
            </Marker>
          </MapContainer>

          {selectedArea}
        </div>
      </div>
    </div>
  );
};

export default Home;

