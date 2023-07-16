import React, { useState, ChangeEvent } from "react";
import "./App.css";
import UserInput from "./UserInputComponents/UserInput";
import Results from "./ResultsComponents/Results";
import Destination from "./Components/DestinationComponents/Destination";

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const chosenDepartrue = event?.target.value;
    setSelectedOption(chosenDepartrue);
  };
  return (
    <div className="app">
      <Destination
        selectedOption={selectedOption}
        handleChange={handleChange}
      />
      <UserInput />
      <Results />
    </div>
  );
}

export default App;
