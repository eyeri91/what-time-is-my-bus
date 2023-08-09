import React from "react";
import "./App.css";
import Card from "./MainCard/Card";
import Dropdown from "./OtherComponents/Dropdown";

function App() {
  return (
    <div className="app container d-flex  align-items-center justify-content-center min-vh-100">
      <div className="contaier d-flex flex-column">
        <Dropdown />
        <Card />
      </div>
    </div>
  );
}

export default App;
