import Head from "next/head";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../CartContext";
import Header from "../../../../components/homepage/header/Header";
import Simis from "../../../../components/meals/meals/Simi";
import { kfcData, storeData } from "../../../../store";

export default function KFC() {
  const cart = useContext(CartContext);
  const [meal, setMeal] = useState([]);
  const [data, setData] = useState([]);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  const name = "KFC";

  useEffect(() => {
    const token = localStorage.getItem("token");
    async function fetchData() {
      const data = await kfcData();
      const restaurantData = await storeData(token);
      setMeal(data);
      setData(restaurantData);
    }
    fetchData();
  }, [meal, data]);

  return (
    <Fragment>
      <Head>
        <title>KFC</title>
        <meta
          name="description"
          content="Get the best experience ordering for your favorite meal with ease from your favorite restaurant"
        />
      </Head>
      <Header quantity={quantity} />
      <Simis data={data} name={name} meal={meal} />
    </Fragment>
  );
}

// export async function getStaticProps() {
//   const data = await kfcData();
//   const restaurantData = await storeData();

//   return {
//     props: {
//       meal: data,
//       data: restaurantData,
//     },
//   };
// }
