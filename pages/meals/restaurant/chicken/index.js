import Head from "next/head";
import React, { Fragment, useContext } from "react";
import { CartContext } from "../../../../CartContext";
import Header from "../../../../components/homepage/header/Header";
import Simis from "../../../../components/meals/meals/Simi";
import { chickenData, storeData } from "../../../../store";

export default function Chicken({ meal, data }) {
  const cart = useContext(CartContext);
  const name = "chicken republic";
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Head>
        <title>Chicken Republic</title>
        <meta
          name="description"
          content="Get the best experience ordering for your favorite meal with ease from your favorite restaurant"
        />
      </Head>
      <Header quantity={quantity} />
      <Simis name={name} data={data} meal={meal} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const data = await chickenData();
  const restaurantData = await storeData();

  return {
    props: {
      meal: data,
      data: restaurantData,
    },
  };
}
