import React, { useState } from "react";
import "./App.css";
import { handleChange } from "./Utils/utils";
import { Image } from "./OtherComponents/Img";
import Header from "./OtherComponents/Header";
import UserInput from "./UserInputComponents/UserInput";
import Results from "./ResultsComponents/Results";
import Destination from "./DestinationComponents/Destination";

function App() {
  const [selectedOption, setSelectedOption] = useState("Tower4");
  const [egateTime, setEgateTime] = useState("");
  const [recommendedBuses, setRecommnededBuses] = useState<string[]>([]);

  return (
    <div className="app container card ">
      <Image />
      <Header />
      <div className="card-body d-flex flex-column  ">
        <Destination
          selectedOption={selectedOption}
          handleChange={(e) => handleChange(e, setSelectedOption)}
        />
        <UserInput
          handleChange={(e) => handleChange(e, setEgateTime)}
          egateTime={egateTime}
          selectedOption={selectedOption}
          setRecommnededBuses={setRecommnededBuses}
        />
        <Results recommendedBuses={recommendedBuses} />
      </div>
    </div>
  );
}

export default App;
