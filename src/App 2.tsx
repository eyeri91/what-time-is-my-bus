import React from "react";
import "./App.css";
import UserInput from "./UserInputComponents/UserInput";
import Results from "./ResultsComponents/Results";
import Destination from "./Components/DestinationComponents/Destination";

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
