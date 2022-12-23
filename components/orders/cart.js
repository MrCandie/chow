import classes from "./cart.module.css";
import { IoIosArrowBack } from "react-icons/io";
import CartItem from "./cartItem";
import { useRouter } from "next/router";
import { Fragment, useContext, useEffect } from "react";
import { CartContext } from "../../CartContext";
import Link from "next/link";
import { getCart } from "../../util/http";
import { toast } from "react-toastify";

export default function Cart({ cartData }) {
  const cart = useContext(CartContext);
  const token = cart.token;
  useEffect(() => {
    async function fetchCart() {
      try {
        const item = await getCart(token);
        cart.setCartItem(item);
      } catch (error) {
        toast.error("Something went wrong", error.message);
      }
    }
    fetchCart();
  });

  const router = useRouter();
  const cost = cart.getTotalCost() + 600;

  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <section className={classes.section}>
      <span onClick={() => router.replace("meals")} className={classes.back}>
        <IoIosArrowBack />
      </span>
      <h1>Cart</h1>

      {quantity > 0 ? (
        <Fragment>
          {cart.items.map((item) => (
            <CartItem
              cartData={cartData}
              id={item.id}
              quantity={item.quantity}
            />
          ))}

          <div className={classes.price}>
            <h1>Price</h1>
            <div className={classes.cost}>
              <p>Subtotal</p>
              <p>N{cart.getTotalCost()}</p>
            </div>
            <div className={classes.cost}>
              <p>Discount</p>
              <p>N0.00</p>
            </div>
            <div className={classes.cost}>
              <p>Delivery</p>
              <p>N{cart.getTotalCost() === 0 ? 0 : 600}</p>
            </div>
            <hr />
            <div className={classes.cost}>
              <p>Total</p>
              <p>#{cart.getTotalCost() === 0 ? 0 : cost}</p>
            </div>
            <button onClick={() => router.push("/checkout")}>
              Place Order Now
            </button>
          </div>
        </Fragment>
      ) : (
        <div className="container">
          <h1>cart empty!</h1>
          <Link className={classes.none} href="/meals">
            Go back to restaurant
          </Link>
        </div>
      )}
    </section>
  );
}
