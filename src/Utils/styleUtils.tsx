export const hideDisplay = (
  isBtnDisabled: boolean,
  currentClassName: string
): string => {
  return isBtnDisabled ? currentClassName + " d-none" : currentClassName;
};
