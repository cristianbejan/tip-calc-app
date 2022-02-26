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
              className={
                props.tipStatus === "default" && props.value === button
                  ? classes.active
                  : ""
              }
              key={index}
              type="button"
              onClick={() => {
                props.onChange({ target: { value: button } });
                props.setTipStatus("default");
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
          min="1"
          value={props.tipStatus === "custom" ? props.value : ""}
          onChange={(event) => {
            props.onChange(event);
            props.setTipStatus("custom");
          }}
        ></Input>
      </div>
    </section>
  );
};

export default TipSection;
