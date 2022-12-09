import Head from "next/head";
import React, { Fragment, useContext } from "react";
import { CartContext } from "../../../../CartContext";
import Header from "../../../../components/homepage/header/Header";
import MealsDetails from "../../../../components/meals/meals/MealsDetails";
import { getkfc } from "../../../../store";

export default function Index({ meals }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Head>
        <title>Meal Details</title>
        <meta
          name="description"
          content="Get the best experience ordering for your favorite meal with ease from your favorite restaurant"
        />
      </Head>
      <Header quantity={quantity} />
      <MealsDetails meals={meals} />;
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const kfcId = params.kfcId;

  const data = await getkfc(kfcId);

  return {
    props: {
      meals: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { kfcId: "k1" } },
      { params: { kfcId: "k2" } },
      { params: { kfcId: "k3" } },
      { params: { kfcId: "k4" } },
    ],
    fallback: "blocking",
  };
}
