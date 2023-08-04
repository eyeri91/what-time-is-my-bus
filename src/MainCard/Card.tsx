import React, { useState, useEffect } from "react";
import { handleChange } from "../Utils/utils";
import { Image } from "../OtherComponents/Img";
import Header from "../OtherComponents/Header";
import UserInput from "../UserInputComponents/UserInput";
import Results from "../ResultsComponents/Results";
import Destination from "../DestinationComponents/Destination";
import Footer from "../OtherComponents/Footer";
import schedules from "../Data/schedules.json";
import { Stops } from "../Utils/utils";

export function Card() {
  type SelectedRoupe = {
    name: string;
    lastUpdate: string;
    stops: Stops;
  };
  type NameAndStops = Pick<SelectedRoupe, "name" | "stops">;
  const selectedRoute: SelectedRoupe = schedules.route6;
  const nameAndStopsOfSelecetedRoute: NameAndStops = selectedRoute;
  const [selectedDeparture, setSelectedDeparture] = useState(
    selectedRoute.stops[0].stopName
  );
  const [egateTime, setEgateTime] = useState("");
  const [recommendedBuses, setRecommnededBuses] = useState<string[]>([]);

  useEffect(() => {
    setRecommnededBuses([]);
  }, [selectedDeparture]);
  return (
    <div className="card">
      <Image />
      <Header />
      <div className="card-body d-flex flex-column  ">
        <Destination
          nameAndStopsOfSelecetedRoute={nameAndStopsOfSelecetedRoute}
          selectedDeparture={selectedDeparture}
          handleChange={(e) => handleChange(e, setSelectedDeparture)}
        />
        <UserInput
          handleChange={(e) => handleChange(e, setEgateTime)}
          nameAndStopsOfSelecetedRoute={nameAndStopsOfSelecetedRoute}
          egateTime={egateTime}
          selectedDeparture={selectedDeparture}
          setRecommnededBuses={setRecommnededBuses}
        />
        <Results
          recommendedBuses={recommendedBuses}
          selectedDeparture={selectedDeparture}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Card;
