import React from "react";
import "./App.css";
import Card from "./MainCard/Card";
import busSchedules from "./Data/busSchedules.json";

import Dropdown from "./OtherComponents/Dropdown";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app d-flex align-items-center justify-content-center min-vh-100">
      <div className="container">
        <Dropdown />

        <Routes>
          <Route path="/" element={<Card {...busSchedules.route6} />} />
          <Route path="/route5" element={<Card {...busSchedules.route5} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
