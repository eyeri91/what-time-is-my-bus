import React from "react";
import { Link } from "react-router-dom";

export function Dropup() {
  return (
    <div className="btn-group dropup">
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropup
      </button>
      <ul className="dropdown-menu">
        <li>
          <Link to="/">DSO</Link>
        </li>
        <li>
          <Link to="/route5">Sarab</Link>
        </li>
      </ul>
    </div>
  );
}
export default Dropup;
