import Head from "next/head";
import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Login from "../../components/Account/login";
import Payment from "../../components/payment/Payment";

export default function Index() {
  const cart = useContext(CartContext);

  const isAuth = cart.isLoggedIn;
  return (
    <Fragment>
      <Head>
        <title>Payment</title>
        <meta
          name="description"
          content="Get the best experience ordering for your favorite meal with ease from your favorite restaurant"
        />
      </Head>
      {isAuth ? <Payment /> : <Login />}
    </Fragment>
  );
}
