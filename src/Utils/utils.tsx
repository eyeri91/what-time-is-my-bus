import { ChangeEvent } from "react";

type UseStateFuncType<T> = (newVal: T) => void;

export interface SelectOption {
  selectedOption: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface EgateTimeDetails extends SelectOption {
  egateTime: string;
  setRecommnededBuses: (buses: string[]) => void;
}

export const checkIfDepartureIsHQ = (departure: string): boolean => {
  return departure === "HQ" ?? false;
};

export const handleChange = (
  event: ChangeEvent<HTMLInputElement>,
  setStateFunc: UseStateFuncType<string>
) => {
  const newValue = event?.target.value;
  setStateFunc(newValue);
};

// If departing point is first or second stop
// I need a function that takes a timing and loop through an array and
// get the closest time's index. Get the very timing and 2 more previous ones
// by accessing by index. And return an array of those 3.

// If departure is from HQ

// I need a function to show the current time (value)
// And!
// I need a function that takes a timing and loop through an array and
// get the closest time's index. Get the very timing and 2 more next ones
// by accessing by index. And return an array of those 3.

// When Check button is clicked, Check if the depareture is set AND
//  E-gate time is chosen.
