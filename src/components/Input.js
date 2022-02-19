import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        className={props.className}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        required
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export default Input;
