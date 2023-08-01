import React from "react";
import RadioForm from "./RadioForm";
import { SelectOption } from "../Utils/utils";
import schedules from "../Data/schedules.json";

const route6Schedule = schedules.route6;

export function Destination(props: SelectOption) {
  return (
    <div className="destination mb-3">
      <h5 className="lead text-center text-secondary mb-3">
        {route6Schedule.name}
      </h5>
      <div className="radioContainer d-flex justify-content-around">
        {route6Schedule.stops.map((stop) => {
          return (
            <RadioForm
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
