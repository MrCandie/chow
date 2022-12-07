import classes from "./meal.module.css";
import { GrAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";
import { useRouter } from "next/router";

export default function MealsDetails({ meals }) {
  if (!meals) {
    return <p>Loading...</p>;
  }

  return (
    <section className={classes.section}>
      <h1>Product Details page</h1>
      <div className={classes.food}>
        <div className={classes.images}>
          <img src={`../../..${meals.images}`} />
        </div>
        <div className={classes.contents}>
          <h1>{meals.name}</h1>
        </div>
        <div className={classes.price}>
          <s>N3,600</s>
          <span>N{meals.price}</span>
        </div>
        <div className={classes.cart}>
          <div className={classes.add}>
            <span>
              <AiOutlineMinus />
            </span>
            <span>1</span>
            <span>
              <GrAdd />
            </span>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </section>
  );
}
