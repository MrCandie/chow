import classes from "./cart.module.css";
import { GrAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";
import { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineAdd } from "react-icons/md";

export default function CartItem({ cartData, id, quantity }) {
  const cart = useContext(CartContext);
  const token = cart.token;

  const item = cartData.find((items) => {
    return items.id === id;
  });

  async function updateCartItem() {
    const uid = localStorage.getItem("uid");
    cart.addOneToCart(id, token, uid);
    toast.success("One item added to cart", { autoClose: 300 });
  }

  function removeFromCart() {
    const uid = localStorage.getItem("uid");
    cart.removeOneFromCart(item.id, token, uid);
    toast.warning("One Item removed from cart", {
      autoClose: 300,
    });
  }

  return (
    <section className={classes.cart}>
      <Fragment>
        <div className={classes.container}>
          <div className={classes.image}>
            <img src={`../../..${item.images}`} />
          </div>
          <div className={classes.content}>
            <h1>{item.name}</h1>

            <div className={classes.action}>
              <h2>N{item.price}</h2>
              <div className={classes.control}>
                <span onClick={removeFromCart} className={classes.span}>
                  <AiOutlineMinus />
                </span>

                <span>{quantity}</span>

                <span onClick={updateCartItem} className="add">
                  <MdOutlineAdd />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Fragment>

      <hr />
      <ToastContainer position="top-center" autoClose={300} />
    </section>
  );
}
