import React from "react";
import RadioForm from "./RadioForm";

export function Destination() {
  return (
    <div className="destination">
      This is where the check box is to show the destination
      <RadioForm name={"Tower 2"} id={"tower2"} />
      <RadioForm name={"Tower 4"} id={"tower4"} />
      <RadioForm name={"HQ"} id={"eghq"} />
    </div>
  );
}

export default Destination;
