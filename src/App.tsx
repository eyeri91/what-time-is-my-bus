import React, { useState } from "react";
import "./App.css";
import { handleChange } from "./Utils/utils";
import UserInput from "./UserInputComponents/UserInput";
import Results from "./ResultsComponents/Results";
import Destination from "./Components/DestinationComponents/Destination";

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className="app">
      <Destination
        selectedOption={selectedOption}
        handleChange={(e) => handleChange(e, setSelectedOption)}
      />
      <UserInput />
      <Results />
    </div>
  );
}

export default App;
