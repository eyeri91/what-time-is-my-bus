import { format, set, subMinutes } from "date-fns";
import { Stops, StopObject } from "./utils";
import { hq, tower4, tower2 } from "../Data/timetable";

type TimeObject = {
  hour: number;
  mins: number;
};

export const subtractTimeFromEgateTime = (
  egateTime: string,
  departure: string,
  stops: StopObject[]
) => {
  const numberedEgateTime = stringToNumber(egateTime);
  const givenEgateTime = set(new Date(1991, 7, 9), {
    hours: numberedEgateTime.hour,
    minutes: numberedEgateTime.mins,
  });
  const timeToSubtract = updateTimeToSubtractDependingOnDeparture(
    departure,
    stops
  );

  const newTime = subMinutes(givenEgateTime, timeToSubtract);
  const formattedNewTime = format(newTime, "HH:mm");

  return formattedNewTime;
};

export const updateTimeToSubtractDependingOnDeparture = (
  departure: string,
  stops: StopObject[]
): number | 30 => {
  for (const stop of stops) {
    if (stop.stopName === departure) return stop.travelTime;
  }
  return 30;
};

export const addZeroToOneDigitTimes = (time: string): string => {
  const hour = parseTimeString(time)[0];
  return hour.length === 1 ? `0${hour[0]}` : hour;
};

export const stringToNumber = (time: string): TimeObject => {
  const hour = parseTimeString(time)[0];
  const mins = parseTimeString(time)[1];
  const numberedTimeObject = {
    hour: Number(hour),
    mins: Number(mins),
  };

  return numberedTimeObject;
};

export const parseTimeString = (time: string): string[] => {
  const arrayOfSplitString: string[] = time.split(":");
  return arrayOfSplitString;
};

export const joinNumberedTime = (time: TimeObject): string => {
  const hour = time.hour.toString();
  const zeroedHour = addZeroToOneDigitTimes(hour);
  const mins = time.mins.toString();
  const stringfiedTime = zeroedHour.concat(":", mins);
  return stringfiedTime;
};

export const findBestBusToWork = (
  busScheduleForThisDeparture: string[] | undefined,
  subtractedTime: string
): string => {
  if (busScheduleForThisDeparture === undefined)
    return "No bus schedule to be found";
  const [subtractedTimeHours, subtractedTimeMinutes] =
    parseTimeString(subtractedTime).map(Number);
  let subtractedTimeStamp = subtractedTimeHours * 60 + subtractedTimeMinutes;
  let closestTime: string = "";
  let minDifference = Infinity;

  for (const time of busScheduleForThisDeparture) {
    const [hours, minutes] = parseTimeString(time).map(Number);
    const timeStamp = hours * 60 + minutes;
    let difference = subtractedTimeStamp - timeStamp;
    if (difference < 0) {
      subtractedTimeStamp += 1440;
      difference = subtractedTimeStamp - timeStamp;
    }
    if (difference < minDifference && difference >= 0) {
      minDifference = difference;
      closestTime = time;
    }
  }

  return closestTime;
};

export const findBestBusToHome = (
  busScheduleForThisDeparture: string[] | undefined,
  currentTime: string
): string => {
  if (busScheduleForThisDeparture === undefined)
    return "No bus schedule to be found";

  const [currentTimeHours, currentTimeMinutes] =
    parseTimeString(currentTime).map(Number);
  let currentTimeStamp = currentTimeHours * 60 + currentTimeMinutes;
  let closestTime: string = "";
  let minDifference = Infinity;

  for (const time of busScheduleForThisDeparture) {
    const [hours, minutes] = parseTimeString(time).map(Number);
    let timeStamp = hours * 60 + minutes;
    let difference = timeStamp - currentTimeStamp;

    if (difference < 0) {
      timeStamp += 1440;
      difference = timeStamp - currentTimeStamp;
    }
    if (difference < minDifference && difference > 0) {
      minDifference = difference;
      closestTime = time;
    }
  }

  return closestTime;
};

export const getRecommendedBusTimings = (
  time: string,
  departure: string,
  busScheduleForThisDeparture: string[]
): string[] => {
  let recommendedBusTimings: string[] = [];
  if (departure === "HQ") {
    const indexOfBestBusTiming = busScheduleForThisDeparture.indexOf(time);
    recommendedBusTimings = [
      busScheduleForThisDeparture[indexOfBestBusTiming],
      busScheduleForThisDeparture[indexOfBestBusTiming + 1],
      busScheduleForThisDeparture[indexOfBestBusTiming + 2],
    ];
  } else if (departure !== "HQ") {
    const indexOfBestBusTiming = busScheduleForThisDeparture.indexOf(time);
    recommendedBusTimings = [
      busScheduleForThisDeparture[indexOfBestBusTiming - 1],
      busScheduleForThisDeparture[indexOfBestBusTiming],
      busScheduleForThisDeparture[indexOfBestBusTiming + 1],
    ];
  } else {
    return recommendedBusTimings;
  }
  return recommendedBusTimings;
};

export const getRelatedTimings = (
  departure: string,
  stops: Stops
): string[] => {
  for (const stop of stops) {
    if (stop.stopName === departure) return stop.timings;
  }
  return [];
};

export const getCurrentTime = (): string => {
  const today = new Date();
  const time =
    today.getHours().toString() + ":" + today.getMinutes().toString();
  return time;
};
