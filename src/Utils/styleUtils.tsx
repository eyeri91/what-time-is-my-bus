export const hideDisplay = (
  hide: boolean,
  currentClassName: string
): string => {
  return hide ? currentClassName + " d-none" : currentClassName;
};
