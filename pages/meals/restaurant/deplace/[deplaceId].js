import React, { Fragment } from "react";
import Header from "../../../../components/homepage/header/Header";
import MealsDetails from "../../../../components/meals/meals/MealsDetails";

export default function MealDetails({ food }) {
  return (
    <Fragment>
      <Header />
      <MealsDetails meals={food} />;
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const deplaceId = params.deplaceId;
  const res = await fetch(
    "https://chow-d2355-default-rtdb.firebaseio.com/deplace.json"
  );
  const data = await res.json();
  const loadedData = [];
  for (const key in data) {
    loadedData.push({
      id: key,
      ...data[key],
    });
  }

  const meal = loadedData.find((item) => item.id === deplaceId);

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
