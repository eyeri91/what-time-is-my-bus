import React from "react";
import { EgateTimeDetails } from "../Utils/utils";
import {
  subtractTimeFromEgateTime,
  findClosestTime,
  getRelatedTimings,
  updateTimeToSubtractDependingOnDeparture,
} from "../Utils/times";

export function EgatePicker(props: EgateTimeDetails) {
  const isButtonDisabled = props.selectedOption === "HQ";

  return (
    <div className="container">
      <div className="form-text" id="timePicker-text">
        Enter your E-gate time.
      </div>
      <div className="input-group ">
        <input
          className="form-control"
          type="time"
          id="timePicker"
          name="timePicker"
          step="300"
          aria-describedby="timePicker"
          onChange={props.handleChange}
        />
        <button
          className="btn btn-primary"
          id="searchBusBtn"
          disabled={isButtonDisabled}
          onClick={() => {
            let newTime: string;
            if (props.selectedOption && props.egateTime) {
              newTime = subtractTimeFromEgateTime(
                props.egateTime,
                props.selectedOption
              );

              findClosestTime(getRelatedTimings(props.selectedOption), newTime);
            } else {
              alert("Not all information is given! please check again");
            }
          }}
        >
          Check
        </button>
      </div>
      <button
        className="btn btn-primary"
        id="goingHomeBtn"
        disabled={!isButtonDisabled}
      >
        Going home
      </button>
    </div>
  );
}

export default EgatePicker;
