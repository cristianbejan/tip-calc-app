import React, { useState } from "react";

import Logo from "./Images/Logo";
import Input from "./Input";
import classes from "./Form.module.css";
import TipSection from "./TipSection";
import Button from "./Button";

const Form = () => {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [peopleNumber, setPeopleNumber] = useState("");
  const [tipAmount, setTipAmount] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");
  const [isDisabled, setIsDisabled] = useState(true);

  const billAmountHandler = (event) => {
    setBillAmount(event.target.value);
  };

  const tipPercentHandler = (event) => {
    setTipPercent(event.target.value);
  };

  const peopleNumberHandler = (event) => {
    setPeopleNumber(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const tip = (billAmount * (tipPercent / 100)) / peopleNumber;
    const total = billAmount / peopleNumber + tip;

    setTipAmount(tip.toFixed(2));
    setTotalAmount(total.toFixed(2));
    setIsDisabled(false);
  };

  const resetHandler = (event) => {
    event.preventDefault();

    setBillAmount("");
    setTipPercent("");
    setPeopleNumber("");
    setTipAmount("0.00");
    setTotalAmount("0.00");
    setIsDisabled(true);
  };
  return (
    <div className={classes.container}>
      <Logo className={classes.logo} />
      <form className={classes.card} onSubmit={submitHandler}>
        <div className={classes["left__card"]}>
          <Input
            className={classes.dollar}
            label="Bill"
            htmlFor="billInput"
            name="billInput"
            type="number"
            placeholder="0"
            required
            value={billAmount}
            onChange={billAmountHandler}
          />
          <TipSection
            label="Select Tip %"
            value={tipPercent}
            onChange={tipPercentHandler}
          />
          <Input
            className={classes.person}
            label="Number of People"
            htmlFor="people"
            name="people"
            type="number"
            placeholder="0"
            required
            value={peopleNumber}
            onChange={peopleNumberHandler}
          />
          <Button
            type="submit"
            name="CALCULATE"
            // disabled={!billAmount || !tipPercent || !peopleNumber}
          />
        </div>
        <div className={classes["right__card"]}>
          <div className={classes.result}>
            <div className={classes.amount}>
              <div>
                <p className={classes.description}>Tip Amount</p>
                <p className={classes.person}>/ person</p>
              </div>
              <h1>${tipAmount}</h1>
            </div>
            <div className={classes.total}>
              <div>
                <p className={classes.description}>Total</p>
                <p className={classes.person}>/ person</p>
              </div>
              <h1>${totalAmount}</h1>
            </div>
          </div>
          <Button
            type="submit"
            name="RESET"
            onClick={resetHandler}
            disabled={isDisabled}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
