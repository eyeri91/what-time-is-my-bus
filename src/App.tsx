import React, { useState } from "react";
import "./App.css";
import Card from "./MainCard/Card";
import busSchedules from "./Data/busSchedules.json";
import { BusSchedules } from "./Utils/utils";
import Dropdown from "./OtherComponents/Dropdown";
// import { Route, Routes } from "react-router-dom";

function App() {
  const savedDefaultRoute = localStorage.getItem("defaultRoute") || undefined;

  const [currentRoute, setCurrentRoute] = useState(
    savedDefaultRoute || "route6"
  );

  const handleSaveDefaultRoute = (currentRoute: string) => {
    localStorage.setItem("defaultRoute", currentRoute);
  };

  return (
    <div className="app d-flex align-items-center justify-content-center min-vh-100">
      <div className="container">
        <Dropdown
          onSaveDefaultRoute={handleSaveDefaultRoute}
          busSchedules={busSchedules}
          setCurrentRoute={setCurrentRoute}
          currentRoute={currentRoute}
        />
        <Card {...busSchedules[currentRoute as keyof BusSchedules]} />
      </div>
    </div>
  );
}

export default App;
