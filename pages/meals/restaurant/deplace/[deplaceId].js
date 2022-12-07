import React, { Fragment, useContext } from "react";
import { CartContext } from "../../../../CartContext";
import Header from "../../../../components/homepage/header/Header";
import MealsDetails from "../../../../components/meals/meals/MealsDetails";
import { getDeplace } from "../../../../store";

export default function MealDetails({ food }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Header quantity={quantity} />
      <MealsDetails meals={food} />;
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const deplaceId = params.deplaceId;

  const meal = await getDeplace(deplaceId);

  return {
    props: { food: meal },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { deplaceId: "d1" } },
      { params: { deplaceId: "d2" } },
      { params: { deplaceId: "d3" } },
      { params: { deplaceId: "d4" } },
    ],
    fallback: false,
  };
}
