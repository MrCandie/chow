import Head from "next/head";
import React, { Fragment, useContext, useState } from "react";
import { CartContext } from "../../../../CartContext";
import Header from "../../../../components/homepage/header/Header";
import MealsDetails from "../../../../components/meals/meals/MealsDetails";
import { chickenData } from "../../../../store";

export default function ChickenDetails({ food }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  const [meal, setMeal] = useState([]);
  fetch("https://chow-d2355-default-rtdb.firebaseio.com/chicken.json")
    .then((res) => res.json())
    .then((data) => {
      const loadedData = [];
      for (const key in data) {
        loadedData.push({
          id: key,
          ...data[key],
        });
      }
      setMeal(loadedData);
    });

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
      <MealsDetails meals={food} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const chickenId = params.chickenId;

  const data = await chickenData();

  const meal = data.find((item) => item.id === chickenId);

  return {
    props: { food: meal },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { chickenId: "ch1" } },
      { params: { chickenId: "ch2" } },
      { params: { chickenId: "ch3" } },
      { params: { chickenId: "ch4" } },
    ],
    fallback: false,
  };
}
