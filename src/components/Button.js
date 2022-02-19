import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes["btn__primary"]}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.name}
    </button>
  );
};

export default Button;
