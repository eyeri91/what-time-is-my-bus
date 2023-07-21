import React from "react";
import { EgateTimeDetails } from "../Utils/utils";
import {
  getRelatedTimings,
  getRecommendedBusTimings,
  getCurrentTime,
  findBestBusToHome,
} from "../Utils/times";
import { hideDisplay } from "../Utils/styleUtils";

type GoingHomeButtonProps = {
  selectedOption: EgateTimeDetails["selectedOption"];
  setRecommnededBuses: EgateTimeDetails["setRecommnededBuses"];
};

export const GoingHomeButton = ({
  selectedOption,
  setRecommnededBuses,
}: GoingHomeButtonProps) => {
  const isButtonDisabled =
    selectedOption === "Tower4" || selectedOption === "Tower2";
  const currentClassName = "btn btn-primary";

  return (
    <button
      className={hideDisplay(isButtonDisabled, currentClassName)}
      id="goingHomeBtn"
      disabled={isButtonDisabled}
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
