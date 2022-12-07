import Link from "next/link";
import { Fragment } from "react";
import classes from "./header.module.css";
import { AiFillHome } from "react-icons/ai";
import { GiMeal } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link href="/">Chow</Link>
        </div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/meals">Meals</Link>
            </li>
            <li>
              <Link href="">Orders</Link>
            </li>
            <li>
              <Link href="">Profile</Link>
            </li>
          </ul>
        </nav>
        <Link href="">
          <span className={classes.cart}>
            <AiOutlineShoppingCart />
            <span>6</span>
          </span>
        </Link>
        <div className={classes.mobile}>
          <nav>
            <ul>
              <li>
                <span>
                  <AiFillHome />
                </span>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span>
                  <GiMeal />
                </span>
                <Link href="/meals">Meals</Link>
              </li>
              <li>
                <span>
                  <AiOutlineShoppingCart />
                </span>
                <Link href="">Orders</Link>
              </li>
              <li>
                <span>
                  <CgProfile />
                </span>
                <Link href="">Profile</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  );
}
