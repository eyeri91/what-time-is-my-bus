import React from "react";
import RadioForm from "./RadioForm";
// import { useState, ChangeEvent } from "react";

type SelectOption = {
  selectedOption: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};
export function Destination(props: SelectOption) {
  // const [selectedOption, setSelectedOption] = useState("");
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const chosenDepartrue = event?.target.value;
  //   setSelectedOption(chosenDepartrue);
  // };
  return (
    <div className="destination">
      This is where the check box is to show the destination
      <RadioForm
        value={"Tower2"}
        name={"Tower2"}
        id={"tower2"}
        checked={props.selectedOption === "Tower2"}
        onChange={props.handleChange}
      />
      <RadioForm
        value={"Tower4"}
        name={"Tower4"}
        id={"tower4"}
        checked={props.selectedOption === "Tower4"}
        onChange={props.handleChange}
      />
      <RadioForm
        value={"HQ"}
        name={"HQ"}
        id={"eghq"}
        checked={props.selectedOption === "HQ"}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Destination;
