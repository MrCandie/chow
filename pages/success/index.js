import Head from "next/head";
import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Header from "../../components/homepage/header/Header";
import Success from "../../components/success/Success";

export default function Successes() {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Head>
        <title>Success</title>
        <meta
          name="description"
          content="Get the best experience ordering for your favorite meal with ease from your favorite restaurant"
        />
      </Head>
      <Header quantity={quantity} />
      <Success />
    </Fragment>
  );
}
