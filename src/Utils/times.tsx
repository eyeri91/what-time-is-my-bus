export const addZeroToOneDigitTimes = (time: string): string => {
  const arrayOfSplitString: string[] = time.split(":");
  const hour = arrayOfSplitString[0];
  return hour.length === 1 ? `0${hour[0]}` : hour;
};
