import { useContext, useEffect, useState } from "react";
import classes from "../meals/meals/meal.module.css";
import { CartContext } from "../../CartContext";
import { DUMMY_DATA } from "../../store";
import MealItem from "../meals/meals/mealItem";
import Link from "next/link";

export default function Favorite() {
  const favoritesCtx = useContext(CartContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    const filtered = favoritesCtx.ids.filter((item) => item.uid === uid);
    setData(filtered);
  }, [data]);

  const favIds = data.map((item) => item.id);
  const favoriteMeals = DUMMY_DATA.filter((meal) => favIds.includes(meal.id));

  return (
    <section className={classes.section}>
      <h1>Your Favorites</h1>
      <div className={classes.mealcontainer}>
        {favoriteMeals.length !== 0 ? (
          <MealItem meal={favoriteMeals} />
        ) : (
          <div className="center">
            <div className="img">
              <img src="/images/box.png" />
            </div>
            <Link href="/meals">Add a favorite</Link>
          </div>
        )}
      </div>
    </section>
  );
}
