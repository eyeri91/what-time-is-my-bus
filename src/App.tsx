import React from "react";
import "./App.css";
import Card from "./MainCard/Card";
import schedules from "./Data/schedules.json";

function App() {
  return (
    <div className="app container my-3 d-flex align-items-center justify-content-center">
      <Card />
    </div>
  );
}

export default App;
