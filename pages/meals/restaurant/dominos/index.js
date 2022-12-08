import React, { Fragment, useContext } from "react";
import { CartContext } from "../../../../CartContext";
import Header from "../../../../components/homepage/header/Header";
import Simis from "../../../../components/meals/meals/Simi";
import { dominosData, storeData } from "../../../../store";

export default function Index({ meal, data }) {
  const cart = useContext(CartContext);
  const name = "dominos pizza";
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
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
