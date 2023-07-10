import * as React from "react";
import { ChangeEvent } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import { handleChange } from "../Utils/utils";

export default function BasicTimePicker() {
  const [egateTime, setEgateTime] = React.useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userTime = e.target.value;
    setEgateTime(userTime);
    console.log(egateTime);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimePicker"]}>
        <TimePicker
          label="Basic time picker"
          value={egateTime}
          onChange={handleChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
