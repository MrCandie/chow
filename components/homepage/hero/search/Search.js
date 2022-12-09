import classes from "./search.module.css";
import { Fragment, useRef } from "react";

export default function Search({ onSubmit }) {
  const searchRef = useRef();
  function searchFoodHandler(e) {
    e.preventDefault();
    const search = searchRef.current.value;
    if (!search) {
      return;
    }
    onSubmit(search.trim().toLowerCase());
  }

  return (
    <Fragment>
      <section className={classes.section}>
        <form onSubmit={searchFoodHandler}>
          <input ref={searchRef} type="search" placeholder="Search for meals" />
        </form>
      </section>
    </Fragment>
  );
}
