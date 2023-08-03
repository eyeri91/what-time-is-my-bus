import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Card from "./MainCard/Card";
import schedules from "./Data/schedules.json";

const busRoutes = Object.keys(schedules);

function App() {
  // type CurrentPath = string;
  const useCurrentPath = () => {
    const location = useLocation().pathname;
    const pathname = location.substring(1);
    return pathname;
  };

  return (
    <div className="app container my-3 d-flex align-items-center justify-content-center">
      <Routes>
        <Route path="/" element={<Card route={useCurrentPath()} />} />
        {/* {busRoutes.map((busRoute) => (
          <Route
            key={busRoute}
            path={busRoute}
            element={<Card route={useCurrentPath()} />}
          />
        ))} */}
        {/* <Route path="route6" element={<Card route={useCurrentPath()} />} /> */}
        {/* <Route path="contact" element={<Card />} /> */}
      </Routes>
    </div>
  );
}

export default App;
