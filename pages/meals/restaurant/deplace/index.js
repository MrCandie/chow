import React, { Fragment, useContext } from "react";
import { CartContext } from "../../../../CartContext";
import Header from "../../../../components/homepage/header/Header";
import Simis from "../../../../components/meals/meals/Simi";
import { deplaceData } from "../../../../store";

export default function Simi({ meal }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Header quantity={quantity} />
      <Simis meal={meal} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  const data = await deplaceData();

  return {
    props: {
      meal: data,
    },
  };
}
