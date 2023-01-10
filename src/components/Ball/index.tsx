import React from "react";
import "./Ball.css";

interface buttonProps {
  handleClick: React.MouseEventHandler<HTMLImageElement>;
}

function Ball({ handleClick }: buttonProps) {
  return (
    <img
      id="ball"
      src="https://i.ibb.co/FVDbh3G/8.png"
      alt="magic 8 ball with curly brackets around the 8"
      onClick={handleClick}
    />
  );
}

export default Ball;
