import React from "react";
import RadioForm from "./RadioForm";
import { SelectOption } from "../Utils/utils";

export function Destination(props: SelectOption) {
  return (
    <div className="destination mb-3">
      <h5 className="lead text-secondary mb-3">From...</h5>
      <div className="radioContainer d-flex justify-content-around">
        <RadioForm
          value={"Tower4"}
          name={"Tower4"}
          id={"tower4"}
          checked={props.selectedDeparture === "Tower4"}
          onChange={props.handleChange}
        />
        <RadioForm
          value={"Tower2"}
          name={"Tower2"}
          id={"tower2"}
          checked={props.selectedDeparture === "Tower2"}
          onChange={props.handleChange}
        />

        <RadioForm
          value={"HQ"}
          name={"HQ"}
          id={"eghq"}
          checked={props.selectedDeparture === "HQ"}
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
}

export default Destination;
