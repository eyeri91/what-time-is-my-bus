import { format, set, subMinutes } from "date-fns";

// const givenTime = set(new Date(1970, 0, 1), {
//   hours: 10,
//   minutes: 30,
//   seconds: 0,
// });

type TimeObject = {
  hours: number;
  minutes: number;
};

export const subtractTimeFromEgateTime = (
  egateTime: TimeObject,
  timeToSubtract: TimeObject
) => {
  const givenEgateTime = set(new Date(1991, 7, 9), {
    hours: egateTime.hours,
    minutes: egateTime.minutes,
  });

  const newTime = subMinutes(givenEgateTime, 30);
  return newTime;
  // console.log("Given Time:", format(givenTime, "HH:mm:ss"));
  // console.log("New Time:", format(newTime, "HH:mm:ss"));
};
export const addZeroToOneDigitTimes = (time: string): string => {
  const arrayOfSplitString: string[] = time.split(":");
  const hour = arrayOfSplitString[0];
  return hour.length === 1 ? `0${hour[0]}` : hour;
};
