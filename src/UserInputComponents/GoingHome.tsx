import React from "react";
import { EgateTimeDetails } from "../Utils/utils";
import {
  getRelatedTimings,
  getRecommendedBusTimings,
  getCurrentTime,
  findBestBusToHome,
} from "../Utils/timeRelatedUtils";
import {
  hideDisplay,
  getRouteNameAndReturnTagManagerTag,
} from "../Utils/otherUtils";

type GoingHomeButtonProps = Omit<
  EgateTimeDetails,
  "egateTime" | "handleChange"
>;

export const GoingHomeButton = (props: GoingHomeButtonProps) => {
  const isButtonDisabled = props.selectedDeparture !== "HQ";
  const currentClassName = "btn btn-primary";
  const tagNameToTrackUsers = getRouteNameAndReturnTagManagerTag(
    props.detailsOfSelecetedRoute.name
  );
  return (
    <button
      className={`${hideDisplay(
        isButtonDisabled,
        currentClassName
      )} ${tagNameToTrackUsers}`}
      id="goingHomeBtn"
      disabled={isButtonDisabled}
      onClick={() => {
        const currentTime = getCurrentTime();

        const bestBus = findBestBusToHome(
          getRelatedTimings(
            props.selectedDeparture,
            props.detailsOfSelecetedRoute.stops
          ),
          currentTime
        );

        const bestBusTimings = getRecommendedBusTimings(
          bestBus,
          props.selectedDeparture,
          getRelatedTimings(
            props.selectedDeparture,
            props.detailsOfSelecetedRoute.stops
          )
        );

        props.setRecommnededBuses(bestBusTimings);
      }}
    >
      Going home
    </button>
  );
};
