import { ChangeEvent } from "react";

export const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
  return e.target.value;
};

// I need a function to add '0' to the timing
// that has only one digit first part of parsed spring

// I need a function that takes a time as an argument and subtract given minutes
// And return the new time.

// If departing point is first or second stop
// I need a function that takes a timing and loop through an array and
// get the closest time's index. Get the very timing and 2 more previous ones
// by accessing by index. And return an array of those 3.

// If departure is from HQ

// I need a function to show the current time (value)
// And!
// I need a function that takes a timing and loop through an array and
// get the closest time's index. Get the very timing and 2 more next ones
// by accessing by index. And return an array of those 3.
