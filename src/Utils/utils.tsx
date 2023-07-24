import { ChangeEvent } from "react";

type UseStateFuncType<T> = (newVal: T) => void;

export interface SelectOption {
  selectedDeparture: string;
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

export const getLastDate = (): string => {
  const today = new Date(2023, 7, 23).toJSON().slice(0, 10);
  return today;
};
