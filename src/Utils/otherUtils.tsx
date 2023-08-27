export const hideDisplay = (
  hide: boolean,
  currentClassName: string
): string => {
  return hide ? currentClassName + " d-none" : currentClassName;
};

export const getRouteNameAndReturnTagManagerTag = (
  routeName: string
): string => {
  return routeName.split(" ")[0].toLowerCase();
};
