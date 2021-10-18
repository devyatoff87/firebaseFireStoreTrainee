import React from "react";
import Color from "../color/Color";
import "./ColorItem.scss";
const ColorItem = ({ color, onCallbackDelete, onCallbackUpdate }) => {
  return (
    <div className="color-item mt-2 d-flex justify-content-between align-items-center">
      <div className="inner">
        <h4>{color.name}</h4>
        <Color bgr={color.value} />
      </div>
      <a
        onClick={(e) => {
          e.preventDefault();
          onCallbackUpdate(color.id);
        }}
        className="mx-3"
        href="/"
      >
        Edit
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          onCallbackDelete(color.id);
        }}
        className="mx-3"
        href="/"
      >
        Remove
      </a>
    </div>
  );
};

export default ColorItem;
