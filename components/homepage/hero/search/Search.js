import classes from "./search.module.css";
import { BsFillFilterSquareFill } from "react-icons/bs";
import { Fragment, useRef } from "react";

export default function Search({ onSubmit }) {
  const searchRef = useRef();
  function searchFoodHandler(e) {
    e.preventDefault();
    const search = searchRef.current.value;
    onSubmit(search);
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
