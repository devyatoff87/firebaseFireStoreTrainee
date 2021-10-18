import React from "react";
import "./PromptCard.scss";
const PromptCard = ({
  btnA = "Button A",
  btnB = "Button B",
  onCallbackRemove,
  onCallbackCancel,
  title,
}) => (
  <div className="prompt-card">
    <h3 className="title">{title}</h3>
    <div className="content">
      <button onClick={onCallbackRemove} className="btn btn-primary">
        {btnA}
      </button>
      <button onClick={onCallbackCancel} className="btn btn-danger">
        {btnB}
      </button>
    </div>
  </div>
);

export default PromptCard;
