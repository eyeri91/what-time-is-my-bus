import React from "react";
import BasicTimePicker from "./TimePicker";

export function UserInput() {
  return (
    <div className="userInput">
      This is where a user enters her/his e-gate time
      <BasicTimePicker />
      {/* there should be  a input area to select the egate timing
          Then also a Button to start search */}
    </div>
  );
}

export default UserInput;
