import React from "react";
import { Link } from "react-router-dom";

export function Dropdown() {
  return (
    <div className="dropdown  align-self-start">
      <button
        className="btn btn-light btn-sm dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Other routes
      </button>
      <ul className="dropdown-menu show">
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
      </ul>
    </div>
  );
}
export default Dropdown;
