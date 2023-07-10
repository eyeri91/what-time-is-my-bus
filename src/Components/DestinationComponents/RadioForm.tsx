import React from "react";

type DestinationDetails = {
  name: string;
  id: string;
  checked?: boolean;
};
export function RadioForm(props: DestinationDetails) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={props.name}
        id={props.id}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.name}
      </label>
    </div>
  );
}

export default RadioForm;
