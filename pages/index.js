import Head from "next/head";
import { Fragment, useContext, useState } from "react";
import Header from "../components/homepage/header/Header";
import Promo from "../components/homepage/hero/promo/Promo";
import Recommended from "../components/homepage/hero/recommended/Recommended";
import Restaurant from "../components/homepage/hero/restaurant/Restaurant";
import Search from "../components/homepage/hero/search/Search";
import { deplaceDummyData, dummyStores, recommendedData } from "../store";
import { CartContext } from "../CartContext";

export default function Homepage() {
  const restaurant = dummyStores();
  const menu = recommendedData();

  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Fragment>
      <Head>
        <title>Restaurant</title>
        <meta
          name="description"
          content="order for your favorite meal with ease"
        />
        <link rel="icon" href="" />
      </Head>
      <main>
        <Header quantity={quantity} />
        <Promo />
        <Restaurant restaurant={restaurant} />
        <Recommended meal={menu} />
      </main>
    </Fragment>
  );
}
