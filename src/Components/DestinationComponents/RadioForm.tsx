import React from "react";

type DestinationDetails = {
  name: string;
  value: string;
  id: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
export function RadioForm(props: DestinationDetails) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={props.name}
        value={props.value}
        id={props.id}
        onChange={props.onChange}
        checked={props.checked}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.name}
      </label>
    </div>
  );
}

export default RadioForm;
