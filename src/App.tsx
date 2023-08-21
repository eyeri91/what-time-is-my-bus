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
  console.log("current route:" + currentRoute);
  console.log("pre-saved route:" + savedDefaultRoute);
  const handleSaveDefaultRoute = (currentRoute: string) => {
    localStorage.setItem("defaultRoute", currentRoute);
    console.log("saved route:" + localStorage.getItem("defaultRoute"));
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
        {/* <Routes>
     
          <Route path="/" element={<Card {...busSchedules.route6} />} />
          <Route path="/route5" element={<Card {...busSchedules.route5} />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
