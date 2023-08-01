import React from "react";
import { GithubIcon } from "./GithubIcon";
import schedules from "../Data/schedules.json";

const route6Schedule = schedules.route6;

export function Footer() {
  return (
    <div className="card-footer bg-light-subtle text-center">
      <a href="https://github.com/eyeri91/" className="me-2">
        <GithubIcon />
      </a>
      <small className="text-muted mb-1 me-1 ">
        Last update: {route6Schedule.lastUpdate}
      </small>
    </div>
  );
}

export default Footer;
