import Link from "next/link";
import { Fragment } from "react";
import classes from "./header.module.css";
import { AiFillHome } from "react-icons/ai";
import { GiMeal } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

export default function Header({ quantity }) {
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
              <Link href="/search">Search</Link>
            </li>
            <li>
              <Link href="/meals">Meals</Link>
            </li>
            <li>
              <Link href="/cart">Orders</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <div className={classes.carts}>
          <Link className={classes.cart} href="/cart">
            <span className={classes.spans}>
              <AiOutlineShoppingCart />
              <span className={classes.span}>{quantity}</span>
            </span>
          </Link>
          <Link className={classes.user} href="/profile">
            <span className={classes.cart}>
              <AiOutlineUser />
            </span>
          </Link>
        </div>
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
                  <AiOutlineSearch />
                </span>
                <Link href="/search">Search</Link>
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
                <Link href="/cart">Orders</Link>
              </li>
              <li>
                <span>
                  <CgProfile />
                </span>
                <Link href="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  );
}
