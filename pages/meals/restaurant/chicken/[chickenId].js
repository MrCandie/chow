import React, { Fragment, useState } from "react";
import Header from "../../../../components/homepage/header/Header";
import MealsDetails from "../../../../components/meals/meals/MealsDetails";

export default function ChickenDetails({ food }) {
  const [meal, setMeal] = useState([]);
  fetch("https://chow-d2355-default-rtdb.firebaseio.com/chicken.json")
    .then((res) => res.json())
    .then((data) => {
      const loadedData = [];
      for (const key in data) {
        loadedData.push({
          id: key,
          ...data[key],
        });
      }
      setMeal(loadedData);
    });

  return (
    <Fragment>
      <Header />
      <MealsDetails meals={food} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const chickenId = params.chickenId;
  const res = await fetch(
    "https://chow-d2355-default-rtdb.firebaseio.com/chicken.json"
  );
  const data = await res.json();
  const loadedData = [];
  for (const key in data) {
    loadedData.push({
      id: key,
      ...data[key],
    });
  }

  const meal = loadedData.find((item) => item.id === chickenId);

  return {
    props: { food: meal },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { chickenId: "ch1" } },
      { params: { chickenId: "ch2" } },
      { params: { chickenId: "ch3" } },
      { params: { chickenId: "ch4" } },
    ],
    fallback: false,
  };
}
