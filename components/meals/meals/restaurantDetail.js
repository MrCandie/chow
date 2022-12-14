import classes from "./meal.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import { Fragment } from "react";

export default function RestaurantDetail({ data, name }) {
  if (data.length === 0) {
    return <p>Loading...</p>;
  }
  const restaurant = data.find((item) => item.name === name);

  return (
    <section className={classes.section}>
      <Fragment>
        <h1>{restaurant.name}</h1>
        <div className={classes.rating}>
          <div className={classes.imgs}>
            <div className={classes.black}></div>
            <img src={`../../..${restaurant.image}`} />
          </div>
          <span className={classes.rate}>
            <span>
              <AiOutlineClockCircle />
            </span>
            20-30m
          </span>
          <span className={classes.rate}>
            <span>
              <AiFillLike />
            </span>
            90%
          </span>
          <span className={classes.rate}>
            <span>
              <MdDeliveryDining />
            </span>
            90%
          </span>
        </div>
      </Fragment>
    </section>
  );
}
