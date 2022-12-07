import React from "react";
import classes from "./meal.module.css";
import Restaurant from "./restaurant";

export default function Meal({data}) {
  return (
    <section className={classes.section}>
      <h1>Restaurants</h1>
      <Restaurant data={data} />
    </section>
  );
}
