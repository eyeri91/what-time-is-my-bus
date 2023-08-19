import React from "react";
import RadioForm from "./RadioForm";
import { SelectOption } from "../Utils/utils";

export function Destination(props: SelectOption) {
  const stops = props.detailsOfSelecetedRoute.stops;
  const length = stops.length;
  const accommodations = props.detailsOfSelecetedRoute.stops.slice(
    0,
    length - 1
  );
  const HQ = props.detailsOfSelecetedRoute.stops[length - 1];

  return (
    <div className="destination ">
      <h5 className="lead text-center text-secondary mb-3">
        {props.detailsOfSelecetedRoute.name}
      </h5>
      <div className="radioContainer d-flex justify-content-around flex-row">
        <div className="stopContainer d-flex flex-column ">
          {accommodations.map((stop) => {
            return (
              <RadioForm
                key={stop.stopName}
                value={stop.stopName}
                name={stop.stopName}
                id={stop.id}
                checked={props.selectedDeparture === stop.stopName}
                onChange={props.handleChange}
              />
            );
          })}
        </div>
        <div className="hqContainer d-flex align-self-center">
          <RadioForm
            key={HQ.stopName}
            value={HQ.stopName}
            name={HQ.stopName}
            id={HQ.id}
            checked={props.selectedDeparture === HQ.stopName}
            onChange={props.handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Destination;
