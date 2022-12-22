import classes from "./success.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
import Link from "next/link";

export default function Success() {
  return (
    <section className={classes.section}>
      <span>
        <AiFillCheckCircle />
      </span>
      <h1 className={classes.h1}>order placed successfully</h1>
      <p>
        your food order has been placed successfully, the restaurant will
        confirm your order and have it delivered in no time
      </p>
      <div className={classes.action}>
        <Link className={classes.track} href="/">
          track order
        </Link>
        <Link className={classes.home} href="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}
