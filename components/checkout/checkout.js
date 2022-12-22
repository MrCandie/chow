import classes from "./checkout.module.css";
import Toggle from "./Toggle";

export default function Checkout() {
  return (
    <section className={classes.section}>
      <h1>Delivery</h1>
      <Toggle />
    </section>
  );
}
