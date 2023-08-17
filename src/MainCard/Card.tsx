import React, { useState, useEffect } from "react";
import { handleChange } from "../Utils/utils";
import { Image } from "../OtherComponents/Img";
import Title from "../OtherComponents/Title";
import UserInput from "../UserInputComponents/UserInput";
import Results from "../ResultsComponents/Results";
import Destination from "../DestinationComponents/Destination";
import Footer from "../OtherComponents/Footer";
import { SelectedRoute } from "../Utils/utils";

export function Card(selectedRoute: SelectedRoute) {
  type DetailsOfSelecetedRoute = Omit<SelectedRoute, "lastUpdate">;

  const detailsOfSelecetedRoute: DetailsOfSelecetedRoute = selectedRoute;

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
      <div className="card-header">Featured</div>
      <Image />
      <Title />
      <div className="card-body d-flex flex-column  ">
        <Destination
          detailsOfSelecetedRoute={detailsOfSelecetedRoute}
          selectedDeparture={selectedDeparture}
          handleChange={(e) => handleChange(e, setSelectedDeparture)}
        />
        <UserInput
          handleChange={(e) => handleChange(e, setEgateTime)}
          detailsOfSelecetedRoute={detailsOfSelecetedRoute}
          egateTime={egateTime}
          selectedDeparture={selectedDeparture}
          setRecommnededBuses={setRecommnededBuses}
        />
        <Results
          recommendedBuses={recommendedBuses}
          selectedDeparture={selectedDeparture}
        />
      </div>
      <Footer lastUpdate={selectedRoute.lastUpdate} />
    </div>
  );
}

export default Card;
