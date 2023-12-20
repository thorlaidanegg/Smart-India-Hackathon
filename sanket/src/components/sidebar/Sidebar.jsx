import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import MapIcon from '@mui/icons-material/Map';


const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
    <div className="top">
      <Link to="/home" style={{ textDecoration: "none" }}>
        <span className="logo">SANKET</span>
      </Link>
    </div>
    <hr />
    <div className="center">
      <ul>
        <p className="title">MAIN</p>
        <Link to="/home" style={{ textDecoration: "none" }}>
        <li>
          <DashboardIcon className="icon" />
          <span>Dashboard</span>
        </li>
        </Link>
        <p className="title">LISTS</p>
        <Link to="/workers" style={{ textDecoration: "none" }}>
          <li>
            <PersonOutlineIcon className="icon" />
            <span>Workers</span>
          </li>
        </Link>
        <Link to="/workers/test" style={{ textDecoration: "none" }}>
          <li>
            <StoreIcon className="icon" />
            <span>Current Worker</span>
          </li>
        </Link>
        <Link to="/scheduler" style={{ textDecoration: "none" }}>
        <li>
          <CreditCardIcon className="icon" />
          <span>Calendar</span>
        </li>
        </Link>

        <Link to="/equipment" style={{ textDecoration: "none" }}>
        <li>
          <LocalShippingIcon className="icon" />
          <span>Equipment</span>
        </li>
        </Link>

        <p className="title">USEFUL</p>

        <Link to="/charts" style={{ textDecoration: "none" }}>
        <li>
          <InsertChartIcon className="icon" />
          <span>Charts</span>
        </li>
        </Link>

        <Link to="/map" style={{ textDecoration: "none" }}>
        <li>
          <MapIcon className="icon" />
          <span>Map</span>
        </li>
        </Link>
        <p className="title">USER</p>
        <Link to="/" style={{ textDecoration: "none" }}>
        <li>
          <ExitToAppIcon className="icon" />
          <span>Logout</span>
        </li>
        </Link>
      </ul>
    </div>
    <div className="bottom">
      <div
        className="colorOption"
        onClick={() => dispatch({type:"LIGHT"})}
      ></div>
      <div
        className="colorOption"
        onClick={() => dispatch({type:"DARK"})}
      ></div>
    </div>
  </div>
  )
}

export default Sidebar