import React, { Fragment } from "react";
import PaymentToggle from "./PaymentToggle";
import classes from "./payment.module.css";

export default function Payment() {
  return (
    <Fragment>
      <div className={classes.payment}>
        <h1>Payment</h1>
        <PaymentToggle />
      </div>
    </Fragment>
  );
}
