import React from "react";

import Input from "./Input";

import classes from "./TipSection.module.css";

const TipSection = (props) => {
  return (
    <section>
      <label>{props.label}</label>
      <div className={classes.buttons}>
        <button
          type="button"
          name="five"
          // value={tipPercent.five}
          // onClick={tipPercentHandler}
        >
          5%
        </button>
        <button
          type="button"
          name="ten"
          // value={tipPercent.ten}
          // onClick={tipPercentHandler}
        >
          10%
        </button>
        <button
          type="button"
          name="fiftheen"
          // value={tipPercent.fiftheen}
          // onClick={tipPercentHandler}
        >
          15%
        </button>
        <button
          type="button"
          name="twentyfive"
          // value={tipPercent.twentyfive}
          // onClick={tipPercentHandler}
        >
          25%
        </button>
        <button
          type="button"
          name="fifty"
          // value={tipPercent.fifty}
          // onClick={tipPercentHandler}
        >
          50%
        </button>
        <Input
          htmlFor="custom"
          name="custom"
          type="number"
          placeholder="Custom"
          // value={tipPercent.custom}
          value={props.value}
          onChange={props.onChange}
        ></Input>
      </div>
    </section>
  );
};

export default TipSection;
