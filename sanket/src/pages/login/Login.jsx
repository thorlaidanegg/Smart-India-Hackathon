import "./login.scss"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import animationData from '../../Animation.json'
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">

      <div className="mains">
          <h1 className="title">SANKET</h1>
          <div className="button">
          <Link to="/home" style={{textDecoration:"none"}}>
          <Button variant="contained">Manager</Button>
          </Link>
          <Link to="/supervisor" style={{textDecoration:"none"}}>
            <Button variant="contained">Supervisor</Button>
          </Link>
          </div>
      </div>

      <div className="lottie">
          <Lottie animationData={animationData}/>
     </div>

    </div>
  )
}

export default Login