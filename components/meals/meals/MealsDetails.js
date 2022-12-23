import classes from "./meal.module.css";
import { GrAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";
import { useContext, useEffect } from "react";
import { CartContext } from "../../../CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { getFavorites } from "../../../util/http";
import Spinner from "../../../spinner/spinner";
import { FaLessThan } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/router";

export default function MealsDetails({ meals }) {
  const cart = useContext(CartContext);
  const token = cart.token;
  const router = useRouter();
  if (!meals) {
    return <Spinner />;
  }

  useEffect(() => {
    async function fetchFav() {
      try {
        const favList = await getFavorites(token);
        cart.setFavorites(favList);
      } catch (error) {
        toast.error("Something went wrong!...", error.message);
        return;
      }
    }
    fetchFav();
  }, [cart]);

  const quantity = cart.getProductQuantity(meals.id);

  const mealIsFav = cart.ids.map((item) => item.id);

  const mealIsFavorite = mealIsFav.includes(meals.id);

  function mealFavoriteHandler() {
    if (mealIsFavorite) {
      toast.success(`${meals.name} removed from favorites`);
      return cart.removeFavorite(meals.id, token);
    } else {
      toast.success(`${meals.name} added to favorites`);
      return cart.addFavorite(meals.id, token);
    }
  }

  async function sendCartData() {
    cart.addOneToCart(meals.id, token);
    toast.success("One item added to cart", { autoClose: 300 });
  }

  async function removeCartItem() {
    cart.removeOneFromCart(meals.id, token);
    toast.warning("One Item removed from cart", { autoClose: 300 });
  }

  return (
    <section className={classes.section}>
      <h1>{meals.name}</h1>
      <div className={classes.food}>
        <div className={classes.images}>
          <img src={`../../..${meals.images}`} />
          <div className={classes.addFavorite}>
            <p onClick={() => router.replace("/meals")} className="btn">
              <FaLessThan />
            </p>
            <p onClick={mealFavoriteHandler} className="btn">
              {mealIsFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
            </p>
          </div>
        </div>
        <div className={classes.mealTitle}>
          <h1>{meals.name}</h1>
          <div className={classes.prices}>
            <span>#{meals.price}</span>
          </div>
        </div>
        <div className={classes.mealRating}>
          <div className={classes.star}>
            <span>
              <AiFillStar />
            </span>
            <span>
              <AiFillStar />
            </span>
            <span>
              <AiFillStar />
            </span>
            <span>
              <AiFillStar />
            </span>
            <span>
              <AiFillStar />
            </span>
          </div>
          <p>(34 verified ratings)</p>
        </div>
        <div className={classes.mealDescription}>
          <h1>Description</h1>
          <p>
            the nigerian jollof rice is one of the rich heritage nigeria food
            that has a distinct taste and a best friend to every nigerian
          </p>
        </div>
        <div className={classes.cart}>
          <button onClick={sendCartData}>Add to cart</button>
          <div className={classes.add}>
            <span onClick={removeCartItem}>
              <AiOutlineMinus />
            </span>
            <p>{quantity}</p>
            <span onClick={sendCartData}>
              <GrAdd />
            </span>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={300} />
    </section>
  );
}
