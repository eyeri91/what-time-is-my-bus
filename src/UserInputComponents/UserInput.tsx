import React from "react";

import EgatePicker from "./EgatePicker";
import { EgateTimeDetails } from "../Utils/utils";

export function UserInput(props: EgateTimeDetails) {
  return (
    <div className="userInput">
      This is where a user enters her/his e-gate time
      <EgatePicker handleChange={props.handleChange} />
    </div>
  );
}

export default UserInput;
