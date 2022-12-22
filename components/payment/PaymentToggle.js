import React, { Fragment, useState } from "react";
import CardPayment from "./CardPayment";
import classes from "./payment.module.css";
import PaystackPayment from "./PaystackPayment";

export default function PaymentToggle() {
  const [screen, setScreen] = useState("now");
  const [active, setActive] = useState("now");
  let displayScreen;

  if (screen === "now") {
    displayScreen = <CardPayment />;
  } else {
  }
  return (
    <Fragment>
      <div className={classes.toggle}>
        <button
          onClick={() => {
            setScreen("now");
            setActive("now");
          }}
          className={active === "now" ? classes.active : classes.button}
        >
          pay now
        </button>
        <button
          onClick={() => {
            setScreen("delivery");
            setActive("delivery");
          }}
          className={active === "delivery" ? classes.active : classes.button}
        >
          pay on delivery
        </button>
      </div>
      {displayScreen}
    </Fragment>
  );
}
