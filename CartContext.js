import { createContext, useState } from "react";
import { getChicken, getDeplace, getDeplaceMeal, getMeal } from "./store";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProduct, setCartProduct] = useState([]);
  // const [deplace, setDeplaceData] = useState([]);

  // fetch("https://chow-d2355-default-rtdb.firebaseio.com/deplace.json")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     const deplaceData = [];
  //     for (const key in data) {
  //       deplaceData.push({
  //         id: key,
  //         ...data[key],
  //       });
  //     }
  //     setDeplaceData(deplaceData);
  //   });

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
      // const chickens = chicken.find((item) => item.id === cart.id);
      //   deplaceCost += deplaces.price * cart.quantity;
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
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
