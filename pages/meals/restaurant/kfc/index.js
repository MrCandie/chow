import React, { Fragment, useContext } from "react";
import { CartContext } from "../../../../CartContext";
import Header from "../../../../components/homepage/header/Header";
import Simis from "../../../../components/meals/meals/Simi";
import { kfcData, storeData } from "../../../../store";

export default function KFC({ meal, data }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  const name = "KFC";

  return (
    <Fragment>
      <Header quantity={quantity} />
      <Simis data={data} name={name} meal={meal} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const data = await kfcData();
  const restaurantData = await storeData();

  return {
    props: {
      meal: data,
      data: restaurantData,
    },
  };
}
