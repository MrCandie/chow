import React, { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import Cart from "../../components/orders/cart";
import { deplaceDummyData, getDeplaceMeal } from "../../store";

export default function Carts() {
  const Chickensdata = deplaceDummyData();

  return <Cart cartData={Chickensdata} />;
}
