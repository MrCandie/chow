import { useRouter } from "next/router";
import React, { useContext } from "react";
import { CartContext } from "../../CartContext";
import classes from "./payment.module.css";

export default function BankTransfer() {
  const router = useRouter();
  const cart = useContext(CartContext);

  const totalCost = (cart.getTotalCost() + 600).toFixed(2);
  const cost = new Intl.NumberFormat().format(totalCost);
  return (
    <div className={classes.transfer}>
      <h1>pay #{cost}</h1>
      <div className={classes.pay}>
        <div className={classes.bank}>
          <p>bank</p>
          <span>wema bank</span>
        </div>
        <div className={classes.bank}>
          <p>account number</p>
          <span>1234567890</span>
        </div>
        <div className={classes.bank}>
          <p>account name</p>
          <span>chow food</span>
        </div>
      </div>
      <button onClick={() => router.replace("/success")}>
        I have made payment
      </button>
    </div>
  );
}
