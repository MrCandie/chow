import React, { Fragment, useContext } from "react";
import Meal from "../../components/meals/meals/Meals";
import Header from "../../components/homepage/header/Header";
import { storeData } from "../../store";
import { CartContext } from "../../CartContext";

export default function Meals({ meal }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Header quantity={quantity} />
      <Meal data={meal} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const loadedData = await storeData();

  return {
    props: {
      meal: loadedData,
    },
  };
}
