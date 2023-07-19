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
            const subtracted = subtractTimeFromEgateTime(props.egateTime, 35);
          }}
        >
          Check
        </button>
      </div>
    </div>
  );
}

export default EgatePicker;
