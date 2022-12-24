import React from "react";
import { useRouter } from "next/router";
import classes from "./introduction.module.css";
import Progress from "./Progress";

export default function GetMeals() {
  const router = useRouter();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.image}>
          <img alt="map" src="/images/get.png" />
        </div>
      </div>
      <div className={classes.content}>
        <h1>get your meal delivered in 20 minutes</h1>
        <p>
          no more late delivery, get your hot delicious meal delivered in no
          time
        </p>
      </div>
      <Progress type1={true} type2={true} />
      <div className={classes.action}>
        {false && (
          <button onClick={() => router.replace("/")} className={classes.skip}>
            skip
          </button>
        )}
        <button onClick={() => router.replace("/")} className={classes.next}>
          Get Started
        </button>
      </div>
    </section>
  );
}
