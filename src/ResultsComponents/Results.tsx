import React from "react";

type BusTimingsData = {
  recommendedBuses: string[];
};
export function Results(props: BusTimingsData) {
  return (
    <div className="Results card-body">
      <div className="busOption">{props.recommendedBuses[0]}</div>
      <div className="busOption">{props.recommendedBuses[1]}</div>
      <div className="busOption">{props.recommendedBuses?.[2]}</div>
    </div>
  );
}

export default Results;
