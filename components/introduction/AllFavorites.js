import React from "react";
import { useRouter } from "next/router";
import classes from "./introduction.module.css";
import Progress from "./Progress";

export default function AllFavorites({ screen }) {
  const router = useRouter();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.image}>
          <img alt="map" src="/images/map.png" />
        </div>
      </div>
      <div className={classes.content}>
        <h1>all your favorite meals in one place</h1>
        <p>
          no more multiple apps to get what what you want, order all your
          favorite meals on the app with just 3 clicks
        </p>
      </div>
      <Progress />
      <div className={classes.action}>
        <button onClick={() => router.replace("/")} className={classes.skip}>
          skip
        </button>
        <button onClick={() => screen(2)} className={classes.next}>
          Next
        </button>
      </div>
    </section>
  );
}
