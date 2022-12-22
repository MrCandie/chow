import React, { Fragment, useState } from "react";
import classes from "./checkout.module.css";
import Delivery from "./delivery/Delivery";
import Pickup from "./Pickup/Pickup";

export default function Toggle() {
  const [screen, setScreen] = useState("delivery");
  const [active, setActive] = useState("delivery");
  let displayScreen;

  if (screen === "delivery") {
    displayScreen = <Delivery />;
  } else {
    displayScreen = <Pickup />;
  }

  return (
    <Fragment>
      <div className={classes.toggle}>
        <button
          onClick={() => {
            setScreen("delivery");
            setActive("delivery");
          }}
          className={active === "delivery" ? classes.active : classes.button}
        >
          delivery
        </button>
        <button
          onClick={() => {
            setScreen("pickup");
            setActive("pickup");
          }}
          className={active === "pickup" ? classes.active : classes.button}
        >
          pickup
        </button>
      </div>
      {displayScreen}
    </Fragment>
  );
}
