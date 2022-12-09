import Head from "next/head";
import { Fragment, useContext } from "react";
import Header from "../components/homepage/header/Header";
import Promo from "../components/homepage/hero/promo/Promo";
import Recommended from "../components/homepage/hero/recommended/Recommended";
import Restaurant from "../components/homepage/hero/restaurant/Restaurant";

import { dummyStores, recommendedData } from "../store";
import { CartContext } from "../CartContext";
import Login from "../components/Account/login";

export default function Homepage() {
  const restaurant = dummyStores();
  const menu = recommendedData();

  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  const isAuth = cart.isLoggedIn;
  return (
    <Fragment>
      <Head>
        <title>Chow</title>
        <meta
          name="description"
          content="Get the best experience ordering for your favorite meal with ease from your favorite restaurant"
        />
        <link rel="" href="" />
      </Head>
      {isAuth ? (
        <main>
          <Header quantity={quantity} />
          <Promo />
          <Restaurant restaurant={restaurant} />
          <Recommended meal={menu} />
        </main>
      ) : (
        <Login />
      )}
    </Fragment>
  );
}
