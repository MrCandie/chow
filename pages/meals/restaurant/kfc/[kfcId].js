import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useContext, useState, useEffect } from "react";
import { CartContext } from "../../../../CartContext";
import Header from "../../../../components/homepage/header/Header";
import MealsDetails from "../../../../components/meals/meals/MealsDetails";
import { getkfc } from "../../../../store";

export default function Index() {
  const cart = useContext(CartContext);
  const router = useRouter();
  const [meal, setMeal] = useState([]);
  const token = cart.token;
  const id = router.query.deplaceId;
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    async function fetchData() {
      const data = await getkfc(id, token);

      setMeal(data);
    }
    fetchData();
  }, [meal]);

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
      <MealsDetails meals={meal} />;
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
