import React from "react";

import { Link } from "react-router-dom";

export function Dropdown() {
  return (
    <div className="dropdown align-self-end">
      <button
        className="btn btn-light btn-sm dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="true"
      >
        Dropdown button
      </button>
      <ul className="dropdown-menu">
        <li>
          <Link to="/" className="dropdown-item">
            Action
          </Link>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Dropdown;
