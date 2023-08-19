import React from "react";
import "./App.css";
import Card from "./MainCard/Card";
import busSchedules from "./Data/busSchedules.json";

import Dropdown from "./OtherComponents/Dropdown";
import { Route, Routes } from "react-router-dom";

function App() {
  const defaultRoute = localStorage.getItem("defaultRoute") || "/";

  const handleSaveDefaultRoute = () => {
    const currentRoute = window.location.pathname;
    localStorage.setItem("defaultRoute", currentRoute);
    console.log(localStorage.getItem("defaultRoute"));
  };

  const loadRelatedBusCard = (defaultRoute: string) => {
    if (defaultRoute === "/") {
      return <Card {...busSchedules.route6} />;
    } else {
      const routeId: string = defaultRoute.slice(1);
      const chosenSchedule = busSchedules[routeId as keyof typeof busSchedules];
      return <Card {...chosenSchedule} />;
    }
  };

  return (
    <div className="app d-flex align-items-center justify-content-center min-vh-100">
      <div className="container">
        <Dropdown onSaveDefaultRoute={handleSaveDefaultRoute} />
        <Routes>
          {/* <Route path={defaultRoute}/> */}
          <Route path="/" element={<Card {...busSchedules.route6} />} />
          <Route path="/route5" element={<Card {...busSchedules.route5} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
