import React from "react";
import "./Input.scss";

const Input = ({ label, inputValue }) => {
  return (
    <div class="input-group">
      <span class="input-group-text" id="inputGroup-sizing-sm">
        Small
      </span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
  );
};

export default Input;
