import React from "react";
import { EgateTimeDetails } from "../Utils/utils";
import {
  subtractTimeFromEgateTime,
  findBestBusToWork,
  getRelatedTimings,
  getRecommendedBusTimings,
} from "../Utils/timeRelatedUtils";
import { hideDisplay } from "../Utils/styleUtils";

export function EgatePicker(props: EgateTimeDetails) {
  const isButtonDisabled = props.selectedDeparture === "HQ";
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
            if (props.selectedDeparture && props.egateTime) {
              newTime = subtractTimeFromEgateTime(
                props.egateTime,
                props.selectedDeparture
              );

              const bestBus = findBestBusToWork(
                getRelatedTimings(props.selectedDeparture),
                newTime
              );
              const bestBusTimings = getRecommendedBusTimings(
                bestBus,
                props.selectedDeparture,
                getRelatedTimings(props.selectedDeparture)
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
