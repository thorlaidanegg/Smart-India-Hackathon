import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Single2 from "./pages/single2/Single2";
import New from "./pages/new/New";
import Scheduler from "./pages/scheduler/Scheduler";
import Charts from "./pages/charts/Charts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {userInputs } from "./formsource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Equipment from "./pages/equipment/Equipment";
import Map from "./pages/maps/Maps";
import Supervisor from "./pages/supervisor/Supervisor";



function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}> 
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="workers">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="add new worker"/>}
              />
            </Route>
            <Route path="scheduler" element={<Scheduler />} />
            <Route path="charts" element={<Charts />} />
            <Route path="map" element={<Map />} />

            <Route path="equipment" element={<Equipment />} />
            <Route path="equipment/test" element={<Single2 />} />
            <Route path="supervisor" element={<Supervisor />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
