import React, { Fragment, useContext } from "react";
import { CartContext } from "../../../../CartContext";
import Header from "../../../../components/homepage/header/Header";
import Simis from "../../../../components/meals/meals/Simi";
import { deplaceData, storeData } from "../../../../store";

export default function Simi({ meal, data }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  const name = "de place";
  return (
    <Fragment>
      <Header quantity={quantity} />
      <Simis name={name} data={data} meal={meal} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  const data = await deplaceData();
  const restaurantData = await storeData();

  return {
    props: {
      meal: data,
      data: restaurantData,
    },
  };
}
