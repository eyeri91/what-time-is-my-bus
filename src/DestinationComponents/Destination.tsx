import React from "react";
import RadioForm from "./RadioForm";
import { SelectOption } from "../Utils/utils";

export function Destination(props: SelectOption) {
  const stops = props.detailsOfSelecetedRoute.stops;

  return (
    <div className="destination ">
      <h5 className="lead text-center text-secondary mb-3">
        {props.detailsOfSelecetedRoute.name}
      </h5>
      <div className="radioContainer d-flex justify-content-around flex-wrap">
        {stops.map((stop) => {
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
    </div>
  );
}

export default Destination;
