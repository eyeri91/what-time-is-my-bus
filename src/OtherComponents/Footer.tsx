import React from "react";
import { GithubIcon } from "./GithubIcon";
import { SelectedRoute } from "../Utils/utils";

type LastUpdateOfSelectedRoute = Pick<SelectedRoute, "lastUpdate">;

export function Footer(props: LastUpdateOfSelectedRoute) {
  return (
    <div className="card-footer bg-light-subtle text-center">
      <a href="https://github.com/eyeri91/" className="me-2">
        <GithubIcon />
      </a>
      <small className="text-muted mb-1 me-1 ">
        Last update: {props.lastUpdate}
      </small>
    </div>
  );
}

export default Footer;
