import React, { Fragment, useState } from "react";
import BankTransfer from "./BankTransfer";
import classes from "./payment.module.css";
import PaystackPayment from "./PaystackPayment";

export default function CardPayment() {
  const [checked, setChecked] = useState("card");

  let displayScreen;
  if (checked === "card") {
    displayScreen = <PaystackPayment />;
  } else {
    displayScreen = <BankTransfer />;
  }

  return (
    <Fragment>
      <div className={classes.card}>
        <div
          onClick={() => {
            setChecked("card");
          }}
          className={classes.cardPayment}
        >
          {checked === "card" ? (
            <div className={classes.outer}>
              <div className={classes.inner}></div>
            </div>
          ) : (
            <div className={classes.outer1}>
              <div className={classes.inner1}></div>
            </div>
          )}
          <p>pay with card</p>
        </div>
        <div
          onClick={() => {
            setChecked("transfer");
          }}
          className={classes.cardPayment}
        >
          {checked === "transfer" ? (
            <div className={classes.outer}>
              <div className={classes.inner}></div>
            </div>
          ) : (
            <div className={classes.outer1}>
              <div className={classes.inner1}></div>
            </div>
          )}
          <p>pay with bank transfer</p>
        </div>
      </div>
      {displayScreen}
    </Fragment>
  );
}
