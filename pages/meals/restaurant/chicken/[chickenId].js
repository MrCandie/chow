import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../CartContext";
import Header from "../../../../components/homepage/header/Header";
import MealsDetails from "../../../../components/meals/meals/MealsDetails";
import { chickenData } from "../../../../store";

export default function ChickenDetails() {
  const cart = useContext(CartContext);
  const [meal, setMeal] = useState([]);
  const router = useRouter();

  const id = router.query.chickenId;
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  const token = cart.token;
  useEffect(() => {
    async function fetchData() {
      const data = await chickenData(token);

      const meal = data.find((item) => item.id === id);
      setMeal(meal);
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
      <MealsDetails meals={meal} />
    </Fragment>
  );
}

// export async function getStaticProps(context) {
//   const { params } = context;
//   const chickenId = params.chickenId;

//   const data = await chickenData();

//   const meal = data.find((item) => item.id === chickenId);

//   return {
//     props: { food: meal },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { chickenId: "ch1" } },
//       { params: { chickenId: "ch2" } },
//       { params: { chickenId: "ch3" } },
//       { params: { chickenId: "ch4" } },
//     ],
//     fallback: false,
//   };
// }
