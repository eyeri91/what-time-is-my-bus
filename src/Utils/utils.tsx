import { ChangeEvent } from "react";

export type UseStateFuncType<T> = (newVal: T) => void;

export type StopObject = {
  id: string;
  stopName: string;
  travelTime: number;
  timings: string[];
};

export type HqStopObject = {
  id: string;
  stopName: string;
  timings: string[];
};

export type Stops = Array<StopObject | HqStopObject>;

export interface SelectOption {
  selectedDeparture: string;
  detailsOfSelecetedRoute: {
    name: string;
    stops: Stops;
  };

  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export type SelectedRoute = {
  name: string;
  lastUpdate: string;
  stops: Stops;
};

export interface BusSchedules {
  route5: SelectedRoute;
  route6: SelectedRoute;
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

function isStopObject(stop: StopObject | HqStopObject): stop is StopObject {
  return "travelTime" in stop;
}

export function omitHQStop(
  stops: Array<StopObject | HqStopObject>
): StopObject[] {
  const newStops = stops.filter(isStopObject);
  return newStops;
}
