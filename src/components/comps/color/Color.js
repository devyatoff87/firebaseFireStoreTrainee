import React from "react";
import "./Color.scss";
const Color = ({ bgr }) => {
  return <div style={{ background: bgr }} className="colorDot"></div>;
};

export default Color;
