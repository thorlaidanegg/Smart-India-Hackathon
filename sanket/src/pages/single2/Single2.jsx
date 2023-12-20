import React, { useRef } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import './single2.scss'
import Datatable3 from "../../components/datatable3/datatable3"
export default function Single2() {
    const ref = useRef();
  
    return (
      <div className="model"> 
        <Sidebar/>
      <div className="modelContainer">
        <Datatable3/>
      </div>
      </div>   
    );
  } 