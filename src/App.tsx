import React from "react";
import "./App.css";
import busSchedules from "./Data/busSchedules.json";
import Card from "./MainCard/Card";
import Dropdown from "./OtherComponents/Dropdown";

function App() {
  const allRoutes = Object.keys(busSchedules);
  return (
    <div className="app container d-flex  align-items-center justify-content-center min-vh-100">
      <div className="d-flex flex-column">
        <Dropdown allRoutes={allRoutes} />
        <Card />
      </div>
    </div>
  );
}

export default App;
