import { useRouter } from "next/router";
import { Fragment } from "react";
import classes from "./meal.module.css";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";

export default function MealItem({ meal }) {
  if (meal.length === 0) {
    return;
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
          </div>
          <div className={classes.contents}>
            <h1>{item.name}</h1>
            <div className={classes.mealFavorite}>
              <p>
                <span>
                  <AiFillStar />
                </span>
                4.5
              </p>
              <h2>free delivery</h2>
            </div>
            <div className={classes.adds}>
              <h2>#{item.price}</h2>
              <span>
                <MdOutlineAdd />
              </span>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
}
