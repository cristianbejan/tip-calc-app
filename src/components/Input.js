import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      {props.icon && (
        <div className={classes["icon__container"]}>{props.icon()} </div>
      )}
      <input
        className={props.className}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        min={props.min}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export default Input;
