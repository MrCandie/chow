import Head from "next/head";
import { Fragment } from "react";
import Header from "../components/homepage/header/Header";
import Promo from "../components/homepage/hero/promo/Promo";
import Recommended from "../components/homepage/hero/recommended/Recommended";
import Restaurant from "../components/homepage/hero/restaurant/Restaurant";
import Search from "../components/homepage/hero/search/Search";

export default function Homepage() {
  return (
    <Fragment>
      <Head>
        <title>Restaurant</title>
        <meta
          name="description"
          content="order for your favorite meal with ease"
        />
        <link rel="icon" href="" />
      </Head>
      <main>
        <Header />
        <Search />
        <Promo />
        <Restaurant />
        <Recommended />
      </main>
    </Fragment>
  );
}
