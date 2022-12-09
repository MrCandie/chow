import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { getChicken, getDeplace, getDeplaceMeal, getMeal } from "./store";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export function CartProvider({ children }) {
  const [cartProduct, setCartProduct] = useState([]);
  const [token, setToken] = useState("");
  const router = useRouter();

  const userIsLoggedIn = !!token;

  function logoutHandler() {
    setToken(null);
    localStorage.removeItem("token");
    router.replace("/account/login");
  }

  function loginHandler(token) {
    setToken(token);
    localStorage.setItem("token", token);
    router.replace("/");
  }

  function getProductQuantity(id) {
    const quantity = cartProduct.find((product) => product.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartProduct((prev) => [...prev, { id: id, quantity: 1 }]);
    } else {
      setCartProduct(
        cartProduct.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProduct(
        cartProduct.map((prod) =>
          prod.id === id ? { ...prod, quantity: prod.quantity - 1 } : prod
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProduct((cartProduct) =>
      cartProduct.filter((curProd) => curProd.id !== id)
    );
  }

  function getTotalCost() {
    let deplaceCost = 0;
    let chickenCost = 0;
    cartProduct.map((cart) => {
      const deplace = getMeal(cart.id);

      deplaceCost += deplace.price * cart.quantity;
    });

    return +deplaceCost;
  }

  const value = {
    items: cartProduct,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    getProductQuantity,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
