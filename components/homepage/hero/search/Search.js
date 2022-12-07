import classes from "./search.module.css";
import { BsFillFilterSquareFill } from "react-icons/bs";

export default function Search() {
  return (
    <section className={classes.section}>
      <form>
        <input type="search" placeholder="Search for meals, restaurants" />
      </form>
      <span>
        <BsFillFilterSquareFill />
      </span>
    </section>
  );
}
