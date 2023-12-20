import React from 'react'
import "./widget.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EngineeringIcon from '@mui/icons-material/Engineering';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ConstructionIcon from '@mui/icons-material/Construction';

const Widget = ({type}) => {

    let data;
    
    switch (type) {
        case "User":
          data = {
            title: "MANAGERS",
            isMoney: false,
            number: 5,
            icon: (
              <PersonOutlinedIcon
                className="icon"
                style={{
                  color: "crimson",
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
              />
            ),
          };
          break;

        case "Total Workers":
          data = {
            title: "TOTAL WORKERS",
            isMoney: true,
            number: 1247,
            icon: (
              <EngineeringIcon
                className="icon"
                style={{
                  backgroundColor: "rgba(218, 165, 32, 0.2)",
                  color: "goldenrod",
                }}
              />
            ),
          };
          break;

        case "Area of site":
          data = {
            title: "AREA",
            isMoney: true,
            number: "2.7 Acres",
            link: "",
            icon: (
              <ApartmentIcon
                className="icon"
                style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
              />
            ),
          };
          break;
          
        case "Active Workers":
          data = {
            title: "ACTIVE WORKERS",
            isMoney: true,
            number: 1017,
            
            icon: (
              <ConstructionIcon
                className="icon"
                style={{
                  backgroundColor: "rgba(128, 0, 128, 0.2)",
                  color: "purple",
                }}
              />
            ),
          };
          break;
        default:
          break;
      }

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.number}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage">
                <KeyboardArrowUpIcon/>
                    sanket 
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget