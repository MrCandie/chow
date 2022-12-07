import React, { Fragment } from "react";
import Header from "../../../../components/homepage/header/Header";
import Simis from "../../../../components/meals/meals/Simi";

export default function Simi({ meal }) {
  return (
    <Fragment>
      <Header />
      <Simis meal={meal} />;
    </Fragment>
  );
}

export async function getStaticProps() {
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

  return {
    props: {
      meal: loadedData,
    },
  };
}
