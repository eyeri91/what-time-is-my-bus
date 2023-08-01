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
  selectedDeparture: EgateTimeDetails["selectedDeparture"];
  setRecommnededBuses: EgateTimeDetails["setRecommnededBuses"];
};

export const GoingHomeButton = ({
  selectedDeparture,
  setRecommnededBuses,
}: GoingHomeButtonProps) => {
  const isButtonDisabled = selectedDeparture !== "HQ";
  const currentClassName = "btn btn-primary";

  return (
    <button
      className={hideDisplay(isButtonDisabled, currentClassName)}
      id="goingHomeBtn"
      disabled={isButtonDisabled}
      onClick={() => {
        const currentTime = getCurrentTime();

        const bestBus = findBestBusToHome(
          getRelatedTimings(selectedDeparture),
          currentTime
        );

        const bestBusTimings = getRecommendedBusTimings(
          bestBus,
          selectedDeparture,
          getRelatedTimings(selectedDeparture)
        );

        setRecommnededBuses(bestBusTimings);
      }}
    >
      Going home
    </button>
  );
};
