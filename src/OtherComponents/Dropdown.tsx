import React from "react";

export function Dropdown() {
  return (
    <div className="dropdown align-self-end">
      <button
        className="btn btn-sm btn-light dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Bus Routes
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Action
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
