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
  nameAndStopsOfSelecetedRoute: EgateTimeDetails["nameAndStopsOfSelecetedRoute"];
  setRecommnededBuses: EgateTimeDetails["setRecommnededBuses"];
};

export const GoingHomeButton = ({
  selectedDeparture,
  nameAndStopsOfSelecetedRoute,
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
          getRelatedTimings(
            selectedDeparture,
            nameAndStopsOfSelecetedRoute.stops
          ),
          currentTime
        );

        const bestBusTimings = getRecommendedBusTimings(
          bestBus,
          selectedDeparture,
          getRelatedTimings(
            selectedDeparture,
            nameAndStopsOfSelecetedRoute.stops
          )
        );

        setRecommnededBuses(bestBusTimings);
      }}
    >
      Going home
    </button>
  );
};
