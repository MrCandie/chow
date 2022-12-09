import Head from "next/head";
import React, { Fragment } from "react";
import SearchResult from "../../components/homepage/hero/search/SearchResult";

export default function Index() {
  return (
    <Fragment>
      <Head>
        <title>Search</title>
        <meta
          name="description"
          content="Get the best experience ordering for your favorite meal with ease from your favorite restaurant"
        />
      </Head>
      <SearchResult />
    </Fragment>
  );
}
