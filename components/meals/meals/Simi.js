import classes from "./meal.module.css";
import MealItem from "./mealItem";
import RestaurantDetail from "./restaurantDetail";

export default function Simis({ meal, data, name }) {
  return (
    <section className={classes.section}>
      <RestaurantDetail name={name} data={data} />
      <div className={classes.mealcontainer}>
        <MealItem meal={meal} />
      </div>
    </section>
  );
}
