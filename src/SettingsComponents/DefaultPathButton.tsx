import React from "react";

export function DefaultPathButton() {
  return (
    <button
      type="button"
      className="btn text-primary btn-sm ms-2 "
      data-bs-toggle="modal"
      data-bs-target="#setYourRouteModal"
    >
      Save this route
    </button>
  );
}

export default DefaultPathButton;
