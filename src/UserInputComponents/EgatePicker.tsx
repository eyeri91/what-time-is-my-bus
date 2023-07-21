import React from "react";
import { EgateTimeDetails } from "../Utils/utils";
import {
  subtractTimeFromEgateTime,
  findBestBusToWork,
  getRelatedTimings,
  getRecommendedBusTimings,
} from "../Utils/times";
import { hideDisplay } from "../Utils/styleUtils";

export function EgatePicker(props: EgateTimeDetails) {
  const isButtonDisabled = props.selectedOption === "HQ";
  const currentClassName = "container d-flex flex-column align-items-center";
  return (
    <div className={hideDisplay(isButtonDisabled, currentClassName)}>
      <div className="form-text" id="timePicker-text">
        Enter your E-gate time.
      </div>
      <div className="input-group">
        <input
          className="form-control "
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
          onClick={() => {
            let newTime: string;
            if (props.selectedOption && props.egateTime) {
              newTime = subtractTimeFromEgateTime(
                props.egateTime,
                props.selectedOption
              );

              const bestBus = findBestBusToWork(
                getRelatedTimings(props.selectedOption),
                newTime
              );
              const bestBusTimings = getRecommendedBusTimings(
                bestBus,
                props.selectedOption,
                getRelatedTimings(props.selectedOption)
              );
              props.setRecommnededBuses(bestBusTimings);
            } else {
              alert("Not all information is given! please check again");
            }
          }}
        >
          Check
        </button>
      </div>
    </div>
  );
}

export default EgatePicker;
