import React from "react";
import { Link } from "react-router-dom";
import DefaultPathButton from "../SettingsComponents/DefaultPathButton";
import DefaultPathModal from "../SettingsComponents/DefaultPathModal";

export function Dropdown() {
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
          <Link to="/" className="dropdown-item">
            DSO
          </Link>
        </li>
        <li>
          <Link to="/route5" className="dropdown-item">
            Sarab & Safa
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <DefaultPathButton />
      </ul>
      <DefaultPathModal />
    </div>
  );
}
export default Dropdown;
