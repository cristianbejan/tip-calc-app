import React from "react";

import Input from "./Input";

import classes from "./TipSection.module.css";

const TipSection = (props) => {
  const buttons = ["5", "10", "15", "25", "50"];
  return (
    <section>
      <label>{props.label}</label>
      <div className={classes.buttons}>
        {buttons.map((button, index) => {
          return (
            <button
              key={index}
              type="button"
              onClick={() => {
                props.onChange({ target: { value: button } });
              }}
            >
              {button}%
            </button>
          );
        })}
        <Input
          htmlFor="custom"
          name="custom"
          type="number"
          placeholder="Custom"
          value={props.value}
          onChange={props.onChange}
        ></Input>
      </div>
    </section>
  );
};

export default TipSection;
