import { format, set, subMinutes } from "date-fns";
import { hq, tower4, tower2 } from "../Data/timetable";

type TimeObject = {
  hour: number;
  mins: number;
};

export const subtractTimeFromEgateTime = (
  egateTime: string,
  depareture: string
) => {
  const numberedEgateTime = stringToNumber(egateTime);
  const givenEgateTime = set(new Date(1991, 7, 9), {
    hours: numberedEgateTime.hour,
    minutes: numberedEgateTime.mins,
  });
  const timeToSubtract = updateTimeToSubtractDependingOnDeparture(depareture);

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

export const findClosestTime = (
  busScheduleForThisDeparture: string[] | undefined,
  subtractedTime: string
): string | null => {
  // Convert the specific time to a timestamp (in minutes since midnight)
  const [subtractedTimeHours, subtractedTimeMinutes] =
    parseTimeString(subtractedTime).map(Number);
  let subtractedTimeStamp = subtractedTimeHours * 60 + subtractedTimeMinutes;
  // When the subtractTime is "00:00", the calculated value of subtracted TimeStamp
  // becomes very low in number, leading to  the difference of subtractedTimeStamp and
  // timeStamp becomes negative. So the clostestTime gets null from
  // if condition in for loop code.
  // To avoid this, if manually set subtractedTimeStampe to 1439, which means
  // subtractedTime is 23:59.
  if (subtractedTimeStamp <= 3) subtractedTimeStamp = 1439;

  let closestTime: string = "";
  let minDifference = Infinity;

  if (busScheduleForThisDeparture === undefined) return null;
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

export const getRecommendedBusTimings = (
  time: string,
  depareture: string,
  busScheduleForThisDeparture: string[]
): string[] => {
  let recommendedBusTimings: string[] = [];
  if (depareture === "Tower2" || "Tower4") {
    const indexOfBestBusTiming = busScheduleForThisDeparture.indexOf(time);
    recommendedBusTimings = [
      busScheduleForThisDeparture[indexOfBestBusTiming - 2],
      busScheduleForThisDeparture[indexOfBestBusTiming - 1],
      busScheduleForThisDeparture[indexOfBestBusTiming],
    ];
  } else {
    const indexOfBestBusTiming = busScheduleForThisDeparture.indexOf(time);
    recommendedBusTimings = [
      busScheduleForThisDeparture[indexOfBestBusTiming],
      busScheduleForThisDeparture[indexOfBestBusTiming + 1],
      busScheduleForThisDeparture[indexOfBestBusTiming + 2],
    ];
  }
  return recommendedBusTimings;
};

export const getRelatedTimings = (departure: string): string[] | undefined => {
  switch (departure) {
    case "Tower4":
      return tower4;
    case "Tower2":
      return tower2;

    case "HQ":
      return hq;
    default:
      return undefined;
  }
};
