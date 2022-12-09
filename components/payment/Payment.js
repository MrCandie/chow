import { useContext, useRef, useState } from "react";
import { CartContext } from "../../CartContext";
import classes from "./payment.module.css";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PaystackButton } from "react-paystack";

export default function Payment() {
  const router = useRouter();
  const cart = useContext(CartContext);
  const publicKey = "pk_test_a1f3bf6699a85775a216847f8327c16082e12b1e";
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount: amount * 100,
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      toast.success("Payment Successful!", {
        position: "top-center",
        autoClose: 300,
      });
      router.push("/success");
    },

    onClose: () => {
      toast.error("Payment not Successful!", {
        position: "top-center",
        autoClose: 300,
      });
      router.push("/cart");
    },
  };

  function setAmountHandler() {
    setAmount(cart.getTotalCost().toFixed(2));
  }

  function paymentHandler(e) {
    e.preventDefault();
  }

  return (
    <section className={classes.payment}>
      <h1>Proceed to payment</h1>
      <form onSubmit={paymentHandler} className={classes.form} id="paymentForm">
        <div className={classes.formDetail}>
          <label htmlFor="email">Email Address</label>
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email-address"
          />
        </div>
        <div className={classes.formDetail}>
          <label htmlFor="amount">Amount</label>
          <input
            onChange={setAmountHandler}
            value={amount}
            type="number"
            id="amount"
          />
        </div>
        <div className={classes.formDetail}>
          <label htmlFor="amount">Name</label>
          <input
            required
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="amount"
          />
        </div>
        <div className={classes.formDetail}>
          <label htmlFor="amount">Phone Number</label>
          <input
            required
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            id="amount"
          />
        </div>

        <PaystackButton {...componentProps} />
      </form>
      <ToastContainer position="top-center" autoClose={300} />
    </section>
  );
}
