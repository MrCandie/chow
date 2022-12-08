import classes from "./success.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
import Link from "next/link";

export default function Success() {
  return (
    <section className={classes.section}>
      <span>
        <AiFillCheckCircle />
      </span>
      <h1>Your order was successful.</h1>
      <h1>Your delivery will arrive in 30minutes</h1>
      <Link href="/">Back to home</Link>
    </section>
  );
}
