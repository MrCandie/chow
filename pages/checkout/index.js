import Head from "next/head";
import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Login from "../../components/Account/login";
import Checkout from "../../components/checkout/checkout";

export default function Checkouts() {
  const cart = useContext(CartContext);
  const isAuth = cart.isLoggedIn;
  return (
    <Fragment>
      <Head>
        <title>Checkouts</title>
        <meta
          name="description"
          content="Get the best experience ordering for your favorite meal with ease from your favorite restaurant"
        />
      </Head>
      {isAuth ? <Checkout /> : <Login />}
    </Fragment>
  );
}
