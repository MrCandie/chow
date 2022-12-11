import React, { Fragment } from "react";
import Favorite from "../../components/favorites/Favorite";
import Header from "../../components/homepage/header/Header";

export default function Index() {
  return (
    <Fragment>
      <Header />
      <Favorite />
    </Fragment>
  );
}
