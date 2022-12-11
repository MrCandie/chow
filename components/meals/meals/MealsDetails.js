import classes from "./meal.module.css";
import { GrAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../../../CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

export default function MealsDetails({ meals }) {
  const cart = useContext(CartContext);
  if (!meals) {
    return <Spinner />;
  }

  const quantity = cart.getProductQuantity(meals.id);

  const mealIsFavorite = cart.ids.includes(meals.id);

  function mealFavoriteHandler() {
    if (mealIsFavorite) {
      toast.success(`${meals.name} removed from favorites`);
      return cart.removeFavorite(meals.id);
    } else {
      toast.success(`${meals.name} added to favorites`);
      return cart.addFavorite(meals.id);
    }
  }

  return (
    <section className={classes.section}>
      <h1>{meals.name}</h1>
      <div className={classes.food}>
        <div className={classes.images}>
          <img src={`../../..${meals.images}`} />
        </div>
        <div className={classes.contents}>
          <h1>{meals.name}</h1>
        </div>
        <div className={classes.price}>
          <div className={classes.prices}>
            <s>N3,600</s>
            <span>N{meals.price}</span>
          </div>
          <p onClick={mealFavoriteHandler} className="btn">
            {mealIsFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
          </p>
        </div>
        <div className={classes.cart}>
          <div className={classes.add}>
            <span
              onClick={() => {
                cart.removeOneFromCart(meals.id);
                toast.warning("One Item removed from cart", { autoClose: 300 });
              }}
            >
              <AiOutlineMinus />
            </span>
            <span>{quantity}</span>
            <span
              onClick={() => {
                cart.addOneToCart(meals.id);
                toast.success("One item added to cart", { autoClose: 300 });
              }}
            >
              <GrAdd />
            </span>
          </div>
          <button
            onClick={() => {
              cart.addOneToCart(meals.id);
              toast.success("One item added to cart", { autoClose: 300 });
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={300} />
    </section>
  );
}
