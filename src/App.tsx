import React from "react";
import "./App.css";
import UserInput from "./UserInputComponents/UserInput";
import Results from "./ResultsComponents/Results";
import Destination from "./Components/DestinationComponents/Destination";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="app">
        <Destination />
        <UserInput />
        <Results />
      </div>
    </LocalizationProvider>
  );
}

export default App;
