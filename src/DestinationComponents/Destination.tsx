import React from "react";
import RadioForm from "./RadioForm";
import { SelectOption } from "../Utils/utils";

// const route6Schedule = schedules.route6;

export function Destination(props: SelectOption) {
  return (
    <div className="destination mb-3">
      <h5 className="lead text-center text-secondary mb-3">
        {props.nameAndStopsOfSelecetedRoute.name}
      </h5>
      <div className="radioContainer d-flex justify-content-around">
        {props.nameAndStopsOfSelecetedRoute.stops.map((stop) => {
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
