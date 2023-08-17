import React from "react";
import aircraftImg from "./aircraftImg.jpg";

export const Image = () => {
  return (
    <img
      src={aircraftImg}
      className="card-img-top img-fluid rounded-0"
      alt="aircraft"
    ></img>
  );
};
