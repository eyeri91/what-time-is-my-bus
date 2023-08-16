import React from "react";

interface AllRoutes {
  allRoutes: string[];
}

export function Dropdown(props: AllRoutes) {
  const listItem = (route: string) => {
    const capitalizedRoute = route.charAt(0).toUpperCase() + route.slice(1);
    return (
      <li key={route}>
        <button className="dropdown-item" type="button">
          {capitalizedRoute}
        </button>
      </li>
    );
  };

  const listItems = props.allRoutes.map((route) => {
    return listItem(route);
  });

  return (
    <div className="dropdown align-self-end">
      <button
        id="routesDropdown"
        className="btn btn-sm btn-light dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Bus Routes
      </button>
      <ul className="dropdown-menu">
        <li>
          <a
            className="dropdown-item"
            href="https://what-time-is-my-bus.netlify.app/"
          >
            Action
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
