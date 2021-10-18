import React from "react";
import "./Overlay.scss";
const Overlay = ({ onClick, colored = false }) => {
  let styles = "overlay";
  colored && (styles += " colored");

  return <div onClick={onClick} className={styles}></div>;
};

export default Overlay;
