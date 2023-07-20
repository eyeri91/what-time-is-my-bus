import React from "react";
import { EgateTimeDetails } from "../Utils/utils";
import { stringToNumber, subtractTimeFromEgateTime } from "../Utils/times";

export function EgatePicker(props: EgateTimeDetails) {
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
          onClick={() => {
            props.selectedOption && props.egateTime
              ? console.log(props.selectedOption)
              : alert("Not all information is given! please check again");
            //  I need an asycn function that await to check if destination is set,
            // and if so, also await to see if there is a value for time
            // Then on Click returns array of timings
            // const subtracted = subtractTimeFromEgateTime(props.egateTime, 35);
          }}
        >
          Check
        </button>
      </div>
    </div>
  );
}

export default EgatePicker;
