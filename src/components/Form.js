import React, { useEffect, useState } from "react";

import Logo from "./Images/Logo";
import Input from "./Input";
import classes from "./Form.module.css";
import TipSection from "./TipSection";
import Button from "./Button";

import DollarIcon from "./Images/DollarIcon";
import PersonIcon from "./Images/PersonIcon";

const Form = () => {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [peopleNumber, setPeopleNumber] = useState("");
  const [error, setError] = useState(false);
  const [tipStatus, setTipStatus] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
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

  useEffect(() => {
    if (!peopleNumber) {
      return;
    }

    if (Number(peopleNumber) === 0) {
      setTipAmount(0);
      setTotalAmount(0);
      return;
    }

    const tip = (billAmount * (tipPercent / 100)) / peopleNumber;
    const total = billAmount / peopleNumber + tip;

    setTipAmount(tip);
    setTotalAmount(total);
    setIsDisabled(false);
  }, [billAmount, tipPercent, peopleNumber]);

  useEffect(() => {
    if (peopleNumber && Number(peopleNumber) === 0) {
      setError(true);
    }

    if (!peopleNumber) {
      setError(false);
    }
  }, [peopleNumber]);

  const resetHandler = (event) => {
    event.preventDefault();

    setBillAmount("");
    setTipPercent("");
    setPeopleNumber("");
    setTipAmount(0);
    setTotalAmount(0);
    setIsDisabled(true);
    setError(false);
  };
  return (
    <div className={classes.container}>
      <Logo className={classes.logo} />
      <form className={classes.card}>
        <div className={classes["left__card"]}>
          <Input
            className={classes.dollar}
            icon={DollarIcon}
            label="Bill"
            htmlFor="billInput"
            name="billInput"
            type="number"
            placeholder="0"
            min="1"
            required
            value={billAmount}
            onChange={billAmountHandler}
          />
          <TipSection
            label="Select Tip %"
            value={tipPercent}
            tipStatus={tipStatus}
            setTipStatus={setTipStatus}
            onChange={tipPercentHandler}
          />
          <div>
            <Input
              className={`${classes.person} ${
                error && classes["input__error"]
              }`}
              icon={PersonIcon}
              label="Number of People"
              htmlFor="people"
              name="people"
              type="number"
              placeholder="0"
              min="1"
              // required
              value={peopleNumber}
              onChange={peopleNumberHandler}
            />
            {error && (
              <label className={classes["label__error"]}>Can't be zero</label>
            )}
          </div>
        </div>
        <div className={classes["right__card"]}>
          <div className={classes.result}>
            <div className={classes.amount}>
              <div>
                <p className={classes.description}>Tip Amount</p>
                <p className={classes.person}>/ person</p>
              </div>
              <h1>${tipAmount.toFixed(2)}</h1>
            </div>
            <div className={classes.total}>
              <div>
                <p className={classes.description}>Total</p>
                <p className={classes.person}>/ person</p>
              </div>
              <h1>${totalAmount.toFixed(2)}</h1>
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
