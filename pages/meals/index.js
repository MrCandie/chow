import React, { Fragment, useContext } from "react";
import Meal from "../../components/meals/meals/Meals";
import Header from "../../components/homepage/header/Header";
import { storeData } from "../../store";
import { CartContext } from "../../CartContext";
import Head from "next/head";

export default function Meals({ meal }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Head>
        <title>Restaurants</title>
        <meta
          name="description"
          content="Get the best experience ordering for your favorite meal with ease from your favorite restaurant"
        />
      </Head>
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
