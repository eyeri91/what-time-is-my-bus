import React from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import Results from "./Components/Results";
import Destination from "./Components/Destination";

function App() {
  return (
    <div className="app">
      <Destination />
      <UserInput />
      <Results />
    </div>
  );
}

export default App;
