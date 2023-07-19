import React from "react";
import { addZeroToOneDigitTimes } from "../Utils/times";

type BusTimingsData = {
  recommendedBuses: string[];
};
export function Results(props: BusTimingsData) {
  return (
    <div className="Results">
      This is where you get bus timings to take.
      {/* This should display the bus timings */}
    </div>
  );
}

export default Results;
