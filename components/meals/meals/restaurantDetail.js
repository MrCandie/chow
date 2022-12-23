import classes from "./meal.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import { Fragment } from "react";
import { BiTimeFive } from "react-icons/bi";
import { GoVerified } from "react-icons/go";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Spinner from "../../../spinner/spinner";

export default function RestaurantDetail({ data, name }) {
  if (data.length === 0) {
    return <Spinner />;
  }
  const restaurant = data.find((item) => item.name === name);

  return (
    <section className={classes.section}>
      <Fragment>
        <div className={classes.imgs}>
          <img src={restaurant.img} />
        </div>
        <div className={classes.content}>
          <img className={classes.logo_img} src={restaurant.image} />
          <div className={classes.desc}>
            <div className={classes.descs}>
              <h1>
                {restaurant.name}
                <span>
                  <GoVerified />
                </span>
              </h1>
              <h2>
                <span>
                  <BiTimeFive />
                </span>
                15-20mins
              </h2>
            </div>

            <div className={classes.delivery}>
              <p>
                <span>
                  <MdOutlineDeliveryDining />
                </span>
                Free Delivery On All Meals
              </p>
              <h2>
                <span>
                  <AiFillStar />
                </span>
                4.5
              </h2>
            </div>
          </div>
        </div>
        <div className={classes.address}>
          <address>
            <span>
              <GoLocation />
            </span>
            124, johnson road, adesanya, mushin lagos
          </address>
        </div>
      </Fragment>
    </section>
  );
}
