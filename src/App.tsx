import React, { useState, useEffect } from "react";
import "./App.css";
import { handleChange } from "./Utils/utils";
import { Image } from "./OtherComponents/Img";
import Header from "./OtherComponents/Header";
import UserInput from "./UserInputComponents/UserInput";
import Results from "./ResultsComponents/Results";
import Destination from "./DestinationComponents/Destination";
import Footer from "./OtherComponents/Footer";

function App() {
  const [selectedDeparture, setSelectedDeparture] = useState("Tower4");
  const [egateTime, setEgateTime] = useState("");
  const [recommendedBuses, setRecommnededBuses] = useState<string[]>([]);

  useEffect(() => {
    setRecommnededBuses([]);
  }, [selectedDeparture]);

  return (
    <div className="app container my-3 d-flex align-items-center justify-content-center">
      <div className="card">
        <Image />
        <Header />
        <div className="card-body d-flex flex-column  ">
          <Destination
            selectedDeparture={selectedDeparture}
            handleChange={(e) => handleChange(e, setSelectedDeparture)}
          />
          <UserInput
            handleChange={(e) => handleChange(e, setEgateTime)}
            egateTime={egateTime}
            selectedDeparture={selectedDeparture}
            setRecommnededBuses={setRecommnededBuses}
          />
          <Results
            recommendedBuses={recommendedBuses}
            selectedDeparture={selectedDeparture}
          />
        </div>
        {/* <small className="text-muted text-end mb-1 me-1">
          Last update: {getLastDate()}
        </small> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
