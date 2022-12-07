import classes from "./meal.module.css";
import MealItem from "./mealItem";

export default function Simis({ meal }) {
  return (
    <section className={classes.section}>
      <h1>Simi Restaurant</h1>
      <div className={classes.mealcontainer}>
        <MealItem meal={meal} />
      </div>
    </section>
  );
}
