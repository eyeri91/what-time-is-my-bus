import React from "react";

import EgatePicker from "./EgatePicker";
import { EgateTimeDetails } from "../Utils/utils";
import { GoingHomeButton } from "./GoingHome";

export function UserInput(props: EgateTimeDetails) {
  return (
    <div className="userInput card-body d-flex flex-column align-items-center">
      <EgatePicker
        handleChange={props.handleChange}
        egateTime={props.egateTime}
        selectedOption={props.selectedOption}
        setRecommnededBuses={props.setRecommnededBuses}
      />
      <GoingHomeButton
        selectedOption={props.selectedOption}
        setRecommnededBuses={props.setRecommnededBuses}
      />
    </div>
  );
}

export default UserInput;
