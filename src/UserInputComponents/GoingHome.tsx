import React from "react";
import { EgateTimeDetails } from "../Utils/utils";
import {
  getRelatedTimings,
  getRecommendedBusTimings,
  getCurrentTime,
  findBestBusToHome,
} from "../Utils/timeRelatedUtils";
import { hideDisplay } from "../Utils/styleUtils";

type GoingHomeButtonProps = {
  selectedDeparture: EgateTimeDetails["selectedDeparture"];
  detailsOfSelecetedRoute: EgateTimeDetails["detailsOfSelecetedRoute"];
  setRecommnededBuses: EgateTimeDetails["setRecommnededBuses"];
};

export const GoingHomeButton = ({
  selectedDeparture,
  detailsOfSelecetedRoute,
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
          getRelatedTimings(selectedDeparture, detailsOfSelecetedRoute.stops),
          currentTime
        );

        const bestBusTimings = getRecommendedBusTimings(
          bestBus,
          selectedDeparture,
          getRelatedTimings(selectedDeparture, detailsOfSelecetedRoute.stops)
        );

        setRecommnededBuses(bestBusTimings);
      }}
    >
      Going home
    </button>
  );
};
