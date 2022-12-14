import Head from "next/head";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../CartContext";
import Header from "../../../../components/homepage/header/Header";
import Simis from "../../../../components/meals/meals/Simi";
import { dominosData, storeData } from "../../../../store";

export default function Index() {
  const cart = useContext(CartContext);
  const [meal, setMeal] = useState([]);
  const [data, setData] = useState([]);
  const name = "dominos pizza";
  const token = cart.token;
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    async function fetchData() {
      const data = await dominosData(token);
      const restaurantData = await storeData(token);
      setMeal(data);
      setData(restaurantData);
    }
    fetchData();
  }, [meal, data]);

  return (
    <Fragment>
      <Head>
        <title>Dominos</title>
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

export async function getStaticProps() {
  const data = await dominosData();
  const restaurantData = await storeData();

  return {
    props: {
      meal: data,
      data: restaurantData,
    },
  };
}
