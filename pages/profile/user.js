import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Login from "../../components/Account/login";
import User from "../../components/profile/User";

export default function Users() {
  const cart = useContext(CartContext);
  const isAuth = cart.isLoggedIn;
  return <Fragment>{isAuth ? <User /> : <Login />}</Fragment>;
}
