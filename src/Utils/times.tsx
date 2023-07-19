import { format, set, subMinutes } from "date-fns";

type TimeObject = {
  hour: number;
  mins: number;
};

export const subtractTimeFromEgateTime = (
  egateTime: string,
  timeToSubtract: number
) => {
  const numberedEgateTime = stringToNumber(egateTime);
  const givenEgateTime = set(new Date(1991, 7, 9), {
    hours: numberedEgateTime.hour,
    minutes: numberedEgateTime.mins,
  });

  const newTime = subMinutes(givenEgateTime, timeToSubtract);
  console.log("Given Time:", format(givenEgateTime, "HH:mm"));
  console.log("New Time:", format(newTime, "HH:mm"));
  return newTime;
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
