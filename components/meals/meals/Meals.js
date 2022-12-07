import React from "react";
import classes from "./meal.module.css";
import Restaurant from "./restaurant";
import Spinner from "../../../spinner/spinner";

export default function Meal({ data }) {
  if (data.length === 0) {
    return <Spinner />;
  }
  return (
    <section className={classes.section}>
      <h1>Restaurants</h1>
      <Restaurant data={data} />
    </section>
  );
}
