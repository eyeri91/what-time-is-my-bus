import React from "react";
import { EgateTimeDetails } from "../Utils/utils";
import {
  getRelatedTimings,
  getRecommendedBusTimings,
  getCurrentTime,
  findBestBusToHome,
} from "../Utils/times";

type GoingHomeButtonProps = {
  selectedOption: EgateTimeDetails["selectedOption"];
  setRecommnededBuses: EgateTimeDetails["setRecommnededBuses"];
};
export const GoingHomeButton = ({
  selectedOption,
  setRecommnededBuses,
}: GoingHomeButtonProps) => {
  const isButtonDisabled = selectedOption === "HQ";
  return (
    <button
      className="btn btn-primary"
      id="goingHomeBtn"
      disabled={!isButtonDisabled}
      onClick={() => {
        const currentTime = getCurrentTime();

        const bestBus = findBestBusToHome(
          getRelatedTimings(selectedOption),
          currentTime
        );

        const bestBusTimings = getRecommendedBusTimings(
          bestBus,
          selectedOption,
          getRelatedTimings(selectedOption)
        );

        setRecommnededBuses(bestBusTimings);
      }}
    >
      Going home
    </button>
  );
};
