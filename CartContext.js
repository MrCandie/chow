import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { getMeal } from "./store";
import {
  deleteCart,
  deleteFavorite,
  postCart,
  storeFavorites,
  updateCart,
} from "./util/http";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  setCartItem: (item) => {},
  setFavorites: (fav) => {},
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
  ids: [],
});

export function CartProvider({ children }) {
  const [cartProduct, setCartProduct] = useState([]);
  const [favoritesId, setFavoritesId] = useState([]);
  const [uid, setUid] = useState("");

  const [token, setToken] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const initialToken = localStorage.getItem("token");
    const userUid = localStorage.getItem("uid");
    setUid(userUid);
    setToken(initialToken);
  }, [token]);

  const userIsLoggedIn = !!token;

  async function addFavorite(id, token, uid) {
    const favId = await storeFavorites({ id: id, uid: uid }, token);
    setFavoritesId((curId) => [...curId, { id: id, favId: favId }]);
  }

  async function removeFavorite(id, token) {
    const favId = favoritesId.find((fav) => fav.id === id).favId;
    await deleteFavorite(favId, token);
    setFavoritesId((curId) => curId.filter((favId) => favId !== id));
  }

  function setFavorites(fav) {
    setFavoritesId(fav);
  }

  function logoutHandler() {
    setToken(null);
    localStorage.removeItem("token");
    router.replace("/account/login");
  }

  function loginHandler(token, id) {
    setToken(token);
    setUid(id);
    localStorage.setItem("token", token);
    localStorage.setItem("uid", id);
  }

  function getProductQuantity(id) {
    const quantity = cartProduct.find((product) => product.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  async function addOneToCart(id, token, uid) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      const mealId = await postCart(
        { id: id, quantity: quantity + 1, uid: uid },
        token
      );
      setCartProduct((prev) => [
        ...prev,
        { id: id, quantity: 1, mealId: mealId },
      ]);
    } else {
      const mealId = cartProduct.find((item) => item.id === id).mealId;
      await updateCart(
        mealId,
        { id: id, quantity: quantity + 1, uid: uid },
        token
      );
      setCartProduct(
        cartProduct.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  async function removeOneFromCart(id, token, uid) {
    const quantity = getProductQuantity(id);
    const mealId = cartProduct.find((item) => item.id === id).mealId;
    if (quantity === 1) {
      deleteFromCart(id, token);
    } else {
      await updateCart(
        mealId,
        { id: id, quantity: quantity - 1, uid: uid },
        token
      );
      setCartProduct(
        cartProduct.map((prod) =>
          prod.id === id ? { ...prod, quantity: prod.quantity - 1 } : prod
        )
      );
    }
  }

  async function deleteFromCart(id, token) {
    const mealId = cartProduct.find((item) => item.id === id).mealId;
    await deleteCart(mealId, token);
    setCartProduct((cartProduct) =>
      cartProduct.filter((curProd) => curProd.id !== id)
    );
  }

  function getTotalCost() {
    let deplaceCost = 0;

    cartProduct.map((cart) => {
      const deplace = getMeal(cart.id);

      deplaceCost += deplace.price * cart.quantity;
    });

    return +deplaceCost;
  }

  function setCartItem(item) {
    setCartProduct(item);
  }

  const value = {
    items: cartProduct,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    getProductQuantity,
    setCartItem,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    addFavorite,
    removeFavorite,
    setFavorites,
    ids: favoritesId,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
