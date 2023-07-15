import React from "react";

import EgatePicker from "./EgatePicker";

export function UserInput() {
  return (
    <div className="userInput">
      This is where a user enters her/his e-gate time
      <EgatePicker />
    </div>
  );
}

export default UserInput;
