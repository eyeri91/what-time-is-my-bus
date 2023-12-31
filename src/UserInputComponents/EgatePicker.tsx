import React from "react";
import { EgateTimeDetails, omitHQStop } from "../Utils/utils";
import {
  subtractTimeFromEgateTime,
  findBestBusToWork,
  getRelatedTimings,
  getRecommendedBusTimings,
} from "../Utils/timeRelatedUtils";
import {
  hideDisplay,
  getRouteNameAndReturnTagManagerTag,
} from "../Utils/otherUtils";

export function EgatePicker(props: EgateTimeDetails) {
  const isButtonDisabled = props.selectedDeparture === "HQ";
  const currentClassName = "container d-flex flex-column align-items-center";
  const stopObjects = omitHQStop(props.detailsOfSelecetedRoute.stops);
  const tagNameToTrackUsers = getRouteNameAndReturnTagManagerTag(
    props.detailsOfSelecetedRoute.name
  );
  return (
    <div className={hideDisplay(isButtonDisabled, currentClassName)}>
      <div className="form-text" id="timePicker-text">
        Enter your E-gate time.
      </div>
      <div className="input-group">
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
          className={`${tagNameToTrackUsers} btn btn-primary`}
          id="searchBusBtn"
          onClick={() => {
            let newTime: string;
            if (props.selectedDeparture && props.egateTime) {
              newTime = subtractTimeFromEgateTime(
                props.egateTime,
                props.selectedDeparture,
                stopObjects
              );

              const bestBus = findBestBusToWork(
                getRelatedTimings(
                  props.selectedDeparture,
                  props.detailsOfSelecetedRoute.stops
                ),
                newTime
              );

              const bestBusTimings = getRecommendedBusTimings(
                bestBus,
                props.selectedDeparture,
                getRelatedTimings(
                  props.selectedDeparture,
                  props.detailsOfSelecetedRoute.stops
                )
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
