import { format, set, subMinutes } from "date-fns";
import { hq, tower4, tower2 } from "../Data/timetable";

type TimeObject = {
  hour: number;
  mins: number;
};

export const subtractTimeFromEgateTime = (
  egateTime: string,
  departure: string
) => {
  const numberedEgateTime = stringToNumber(egateTime);
  const givenEgateTime = set(new Date(1991, 7, 9), {
    hours: numberedEgateTime.hour,
    minutes: numberedEgateTime.mins,
  });
  const timeToSubtract = updateTimeToSubtractDependingOnDeparture(departure);

  const newTime = subMinutes(givenEgateTime, timeToSubtract);
  const formattedNewTime = format(newTime, "HH:mm");

  return formattedNewTime;
};

export const updateTimeToSubtractDependingOnDeparture = (
  departure: string
): number => {
  return departure === "Tower4" ? 30 : 25;
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
  if (subtractedTimeStamp <= 3) subtractedTimeStamp = 1439;
  let closestTime: string = "";
  let minDifference = Infinity;

  for (const time of busScheduleForThisDeparture) {
    const [hours, minutes] = parseTimeString(time).map(Number);
    const timeStamp = hours * 60 + minutes;
    const difference = subtractedTimeStamp - timeStamp;

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
  // if currentTime is between 23:50 to 23:59=> set to "00:00"
  // if (currentTimeStamp >= 1430 && currentTimeStamp <= 1439)
  //   currentTimeStamp = 0;
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
  if (departure === "Tower2" || departure === "Tower4") {
    const indexOfBestBusTiming = busScheduleForThisDeparture.indexOf(time);
    recommendedBusTimings = [
      busScheduleForThisDeparture[indexOfBestBusTiming - 1],
      busScheduleForThisDeparture[indexOfBestBusTiming],
      busScheduleForThisDeparture[indexOfBestBusTiming + 1],
    ];
  } else if (departure === "HQ") {
    const indexOfBestBusTiming = busScheduleForThisDeparture.indexOf(time);
    recommendedBusTimings = [
      busScheduleForThisDeparture[indexOfBestBusTiming],
      busScheduleForThisDeparture[indexOfBestBusTiming + 1],
      busScheduleForThisDeparture[indexOfBestBusTiming + 2],
    ];
  } else {
    return recommendedBusTimings;
  }
  return recommendedBusTimings;
};

export const getRelatedTimings = (departure: string): string[] => {
  switch (departure) {
    case "Tower4":
      return tower4;
    case "Tower2":
      return tower2;

    case "HQ":
      return hq;
    default:
      return [];
  }
};

export const getCurrentTime = (): string => {
  const today = new Date();
  const time =
    today.getHours().toString() + ":" + today.getMinutes().toString();
  return time;
};
