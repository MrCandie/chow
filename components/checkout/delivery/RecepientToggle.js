import React, { Fragment, useState } from "react";
import classes from "../checkout.module.css";
import Myself from "./Myself";
import Others from "./Others";

export default function RecepientToggle() {
  const [screen, setScreen] = useState("myself");
  const [active, setActive] = useState("myself");
  let displayScreen;
  if (screen === "others") {
    displayScreen = <Others />;
  } else {
    displayScreen = <Myself />;
  }
  return (
    <Fragment>
      <h1 className={classes.h1}>recepient</h1>
      <div className={classes.recepient}>
        <button
          onClick={() => {
            setActive("myself");
            setScreen("myself");
          }}
          className={
            active === "myself" ? classes.activeButton : classes.buttons
          }
        >
          for myself
        </button>
        <button
          onClick={() => {
            setScreen("others");
            setActive("others");
          }}
          className={
            active === "others" ? classes.activeButton : classes.buttons
          }
        >
          for others
        </button>
      </div>
      {displayScreen}
    </Fragment>
  );
}
