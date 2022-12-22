import { useRouter } from "next/router";
import React from "react";
import classes from "../checkout.module.css";

export default function Myself() {
  const router = useRouter();
  return (
    <div className={classes.paymentButton}>
      <button onClick={() => router.push("/payment")}>
        proceed to payment
      </button>
    </div>
  );
}
