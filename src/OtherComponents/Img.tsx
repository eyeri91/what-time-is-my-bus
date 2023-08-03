import React from "react";
import aircraftImg from "./aircraftImg.jpg";

export const Image = () => {
  return (
    <img
      src={aircraftImg}
      className="card-img-top img-fluid"
      alt="aircraft"
    ></img>
  );
};
