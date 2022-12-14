import Head from "next/head";
import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Cart from "../../components/orders/cart";
import Login from "../../components/Account/login";
import { deplaceData, deplaceDummyData } from "../../store";

export default function Carts() {
  const allData = deplaceDummyData();
  const cart = useContext(CartContext);
  const isAuth = cart.isLoggedIn;

  return (
    <Fragment>
      <Head>
        <title>Cart</title>
        <meta
          name="description"
          content="Get the best experience ordering for your favorite meal with ease from your favorite restaurant"
        />
      </Head>
      {isAuth ? <Cart cartData={allData} /> : <Login />}
    </Fragment>
  );
}

// export async function getStaticProps() {
//   const data = await deplaceData();
// }
