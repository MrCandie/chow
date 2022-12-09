import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Login from "../../components/Account/login";
import Profile from "../../components/profile/profile";

export default function Index() {
  const cart = useContext(CartContext);
  const isAuth = cart.isLoggedIn;
  return <Fragment>{isAuth ? <Profile /> : <Login />}</Fragment>;
}
