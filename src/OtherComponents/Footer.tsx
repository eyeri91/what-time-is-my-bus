import React from "react";
import { getLastDate } from "../Utils/utils";
import { GithubIcon } from "./GithubIcon";

export function Footer() {
  return (
    <div className="card-footer bg-light-subtle text-center">
      <a href="https://github.com/eyeri91/when-is-my-bus" className="me-2">
        <GithubIcon />
      </a>
      <small className="text-muted mb-1 me-1 ">
        Last update: {getLastDate()}
      </small>
    </div>
  );
}

export default Footer;
