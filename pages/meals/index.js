import React, { Fragment } from "react";
import Meal from "../../components/meals/meals/Meals";
import Header from "../../components/homepage/header/Header";

export default function Meals({ meal }) {
  return (
    <Fragment>
      <Header />
      <Meal data={meal} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://chow-d2355-default-rtdb.firebaseio.com/chow.json"
  );
  const data = await res.json();
  const loadedData = [];
  for (const key in data) {
    loadedData.push({
      id: key,
      ...data[key],
    });
  }

  return {
    props: {
      meal: loadedData,
    },
  };
}
