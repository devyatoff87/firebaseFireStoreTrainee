import React, { useState } from "react";

const Form = ({ onCallback, title, btnTxt }) => {
  const init = {
    name: "",
    value: "",
  };
  const [colorItm, setColorItm] = useState(init);

  const onChangeColor = (e) => {
    const value = e.target.value;
    setColorItm({ ...colorItm, [e.target.name]: value });
  };

  return (
    <>
      <h3>{title}</h3>
      <form className="form">
        <input
          placeholder="Name (e.g. Blue)"
          name="name"
          onChange={(e) => onChangeColor(e)}
          type="text"
          maxLength="12"
          minLength="3"
          value={colorItm.name}
        />
        <input
          className="mt-1"
          placeholder="Value (RGB or HEX or CMYC...)"
          name="value"
          onChange={(e) => onChangeColor(e)}
          type="text"
          maxLength="24"
          minLength="7"
          value={colorItm.value}
        />
        <button
          className="mt-2 btn btn-success"
          onClick={(e) => {
            e.preventDefault();
            if (colorItm.name !== "" && colorItm.value !== "") {
              onCallback(colorItm);
              setColorItm(init);
            }
          }}
        >
          {btnTxt}
        </button>
      </form>
    </>
  );
};

export default Form;
