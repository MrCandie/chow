import { useRouter } from "next/router";
import { Fragment } from "react";
import Spinner from "../../../spinner/spinner";
import classes from "./meal.module.css";

export default function MealItem({ meal }) {
  if (meal.length === 0) {
    return <Spinner />;
  }
  const router = useRouter();
  return (
    <Fragment>
      {meal.map((item) => (
        <div
          key={item.id}
          onClick={() =>
            router.push(`/meals/restaurant/${item.key}/${item.id}`)
          }
          className={classes.simi}
        >
          <div className={classes.image}>
            <img src={`../../..${item.images}`} />
            <span></span>
          </div>
          <div className={classes.contents}>
            <h1>{item.name}</h1>
            <h2>N{item.price}</h2>
          </div>
        </div>
      ))}
    </Fragment>
  );
}
