import React from "react";
import classes from "./introduction.module.css";
import { useRouter } from "next/router";
import Progress from "./Progress";

export default function ShareMeals({ screen }) {
  const router = useRouter();

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.image}>
          <img alt="map" src="/images/share.png" />
        </div>
      </div>
      <div className={classes.content}>
        <h1>share meals with your friends without limit</h1>
        <p>enjoy a meal with your friends regardless of the distance</p>
      </div>
      <Progress type1={true} />
      <div className={classes.action}>
        <button onClick={() => router.replace("/")} className={classes.skip}>
          skip
        </button>
        <button onClick={() => screen(3)} className={classes.next}>
          Next
        </button>
      </div>
    </section>
  );
}
