import React from "react";

import EgatePicker from "./EgatePicker";
import { EgateTimeDetails } from "../Utils/utils";
import { GoingHomeButton } from "./GoingHome";

export function UserInput(props: EgateTimeDetails) {
  return (
    <div className="userInput card-body d-flex flex-column align-items-center ">
      <EgatePicker
        detailsOfSelecetedRoute={props.detailsOfSelecetedRoute}
        handleChange={props.handleChange}
        egateTime={props.egateTime}
        selectedDeparture={props.selectedDeparture}
        setRecommnededBuses={props.setRecommnededBuses}
      />
      <GoingHomeButton
        detailsOfSelecetedRoute={props.detailsOfSelecetedRoute}
        selectedDeparture={props.selectedDeparture}
        setRecommnededBuses={props.setRecommnededBuses}
      />
    </div>
  );
}

export default UserInput;
