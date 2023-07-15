import React from "react";
import RadioForm from "./RadioForm";
import { useState, ChangeEvent } from "react";

export function Destination() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const chosenDepartrue = event?.target.value;
    setSelectedOption(chosenDepartrue);
  };
  return (
    <div className="destination">
      This is where the check box is to show the destination
      <RadioForm
        value={"Tower2"}
        name={"Tower2"}
        id={"tower2"}
        checked={selectedOption === "Tower2"}
        onChange={handleChange}
      />
      <RadioForm
        value={"Tower4"}
        name={"Tower4"}
        id={"tower4"}
        checked={selectedOption === "Tower4"}
        onChange={handleChange}
      />
      <RadioForm
        value={"HQ"}
        name={"HQ"}
        id={"eghq"}
        checked={selectedOption === "HQ"}
        onChange={handleChange}
      />
    </div>
  );
}

export default Destination;
