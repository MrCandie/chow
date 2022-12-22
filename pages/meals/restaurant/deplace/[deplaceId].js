import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useContext, useState, useEffect } from "react";
import { CartContext } from "../../../../CartContext";
import Header from "../../../../components/homepage/header/Header";
import MealsDetails from "../../../../components/meals/meals/MealsDetails";
import { getDeplace } from "../../../../store";

export default function MealDetails() {
  const cart = useContext(CartContext);
  const router = useRouter();
  const [meal, setMeal] = useState([]);
  const id = router.query.deplaceId;

  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  useEffect(() => {
    const token = localStorage.getItem("token");
    async function fetchData() {
      const data = await getDeplace(id, token);

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

// export async function getStaticProps(context) {
//   const { params } = context;
//   const deplaceId = params.deplaceId;

//   const meal = await getDeplace(deplaceId);

//   return {
//     props: { food: meal },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { deplaceId: "d1" } },
//       { params: { deplaceId: "d2" } },
//       { params: { deplaceId: "d3" } },
//       { params: { deplaceId: "d4" } },
//     ],
//     fallback: "blocking",
//   };
// }
