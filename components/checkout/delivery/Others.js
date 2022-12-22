import React from "react";
import { useRouter } from "next/router";
import classes from "../checkout.module.css";

export default function Others() {
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push("/payment");
      }}
    >
      <div className={classes.details}>
        <label>recepient's Name</label>
        <input type="text" required placeholder="John Doe" />
      </div>
      <div className={classes.details}>
        <label>recepient's phone number</label>
        <input type="tel" required />
      </div>
      <div className={classes.details}>
        <label>recepient's email address (optional)</label>
        <input type="email" />
      </div>

      <button>Proceed To Payment</button>
    </form>
  );
}
