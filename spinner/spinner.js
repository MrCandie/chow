import Head from "next/head";
import React, { Fragment } from "react";
import classes from "./spinner.module.css";
import { ImSpinner3 } from "react-icons/im";

export default function Spinner() {
  return (
    <Fragment>
      <Head>
        <title></title>
      </Head>
      <div className={classes.spinner}>
        <span>
          <ImSpinner3 />
        </span>
      </div>
    </Fragment>
  );
}
