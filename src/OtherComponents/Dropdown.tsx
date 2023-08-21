import React from "react";
import { BusSchedules, UseStateFuncType } from "../Utils/utils";
import DefaultPathButton from "../SettingsComponents/DefaultPathButton";
import DefaultPathModal from "../SettingsComponents/DefaultPathModal";

interface DropdownProps {
  onSaveDefaultRoute: () => void;
  busSchedules: BusSchedules;
  setCurrentRoute: UseStateFuncType<string>;
}

export function Dropdown(props: DropdownProps) {
  const handleSaveDefaultRoute = () => {
    props.onSaveDefaultRoute();
  };
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
        <li>
          <button className="dropdown-item">DSO</button>
        </li>
        <li>
          <button className="dropdown-item">& Safa</button>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <DefaultPathButton />
      </ul>
      <DefaultPathModal onSave={handleSaveDefaultRoute} />
    </div>
  );
}
export default Dropdown;
