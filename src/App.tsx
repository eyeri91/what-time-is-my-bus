import React, { useState } from "react";
import "./App.css";
import { handleChange } from "./Utils/utils";
import UserInput from "./UserInputComponents/UserInput";
import Results from "./ResultsComponents/Results";
import Destination from "./Components/DestinationComponents/Destination";

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [egateTime, setEgateTime] = useState("");
  const [recommendedBuses, setRecommnededBuses] = useState<string[]>([]);
  return (
    <div className="app">
      <Destination
        selectedOption={selectedOption}
        handleChange={(e) => handleChange(e, setSelectedOption)}
      />
      <UserInput
        handleChange={(e) => handleChange(e, setEgateTime)}
        egateTime={egateTime}
        setRecommnededBuses={setRecommnededBuses}
      />
      <Results recommendedBuses={recommendedBuses} />
    </div>
  );
}

export default App;
