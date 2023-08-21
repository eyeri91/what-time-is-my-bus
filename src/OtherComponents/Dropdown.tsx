import React from "react";
import { BusSchedules, UseStateFuncType } from "../Utils/utils";
import DefaultPathButton from "../SettingsComponents/DefaultPathButton";
import DefaultPathModal from "../SettingsComponents/DefaultPathModal";

interface DropdownProps {
  onSaveDefaultRoute: (newValue: string) => void;
  busSchedules: BusSchedules;
  currentRoute: string;
  setCurrentRoute: UseStateFuncType<string>;
}

export function Dropdown(props: DropdownProps) {
  function displayBusRouteButtonItems(routes: BusSchedules) {
    const routeKeys = Object.keys(routes);
    return routeKeys.map((key) => {
      return (
        <li key={key}>
          <button
            id={key}
            className="dropdown-item"
            onClick={() => props.setCurrentRoute(key)}
          >
            {routes[key as keyof BusSchedules].name}
          </button>
        </li>
      );
    });
  }
  return (
    <div className="dropdown  ">
      <button
        className="btn btn-light btn-sm dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Other routes
      </button>
      <ul className="dropdown-menu">
        {displayBusRouteButtonItems(props.busSchedules)}
        <li>
          <hr className="dropdown-divider" />
        </li>

        <DefaultPathButton />
      </ul>
      <DefaultPathModal
        onSave={() => props.onSaveDefaultRoute(props.currentRoute)}
        name={props.busSchedules[props.currentRoute as keyof BusSchedules].name}
      />
    </div>
  );
}
export default Dropdown;
