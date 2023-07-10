import { ChangeEvent } from "react";

export const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
  return e.target.value;
};
