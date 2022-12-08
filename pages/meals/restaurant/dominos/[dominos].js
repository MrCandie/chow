import React, { Fragment, useContext } from "react";
import { CartContext } from "../../../../CartContext";
import Header from "../../../../components/homepage/header/Header";
import MealsDetails from "../../../../components/meals/meals/MealsDetails";
import { getdominos } from "../../../../store";

export default function Index({ food }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Header quantity={quantity} />
      <MealsDetails meals={food} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const dominosId = params.dominos;

  const meal = await getdominos(dominosId);

  return {
    props: { food: meal },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { dominos: "do1" } },
      { params: { dominos: "do2" } },
      { params: { dominos: "do3" } },
      { params: { dominos: "do4" } },
    ],
    fallback: "blocking",
  };
}
