import { useRouter } from "next/router";
import classes from "./checkout.module.css";

export default function Checkout() {
  const router = useRouter();
  return (
    <section className={classes.section}>
      <h1>Shipping details</h1>
      <hr />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/payment");
        }}
      >
        <div className={classes.details}>
          <label>Full Name</label>
          <input type="text" required placeholder="John Doe" />
        </div>
        <div className={classes.details}>
          <label>email address</label>
          <input type="email" required />
        </div>
        <div className={classes.details}>
          <label>Delivery Address</label>
          <input type="text" required />
        </div>
        <div className={classes.details}>
          <label>phone number</label>
          <input type="tel" required />
        </div>
        <div className={classes.container}>
          <div className={classes.details}>
            <label>Postal Code</label>
            <input required type="text" />
          </div>
          <div className={classes.details}>
            <label>country</label>
            <select>
              <option value="nigeria">Nigeria</option>
            </select>
          </div>
        </div>
        <button>Proceed</button>
      </form>
    </section>
  );
}
