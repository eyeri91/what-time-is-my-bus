import React from "react";
import { useState } from "react";
import { ChangeEvent } from "react";

export function EgatePicker() {
  const [egateTime, setEgateTime] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = event.target.value;
    setEgateTime(userInput);
    console.log(event.target.value);
  };
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
          onChange={handleChange}
        />
        <button className="btn btn-primary" id="searchBusBtn">
          Check
        </button>
      </div>
    </div>
  );
}

export default EgatePicker;
