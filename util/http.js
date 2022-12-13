import axios from "axios";

const BACKEND_URL = "https://chow-d2355-default-rtdb.firebaseio.com";

export async function postCart(data) {
  const response = await axios.post(BACKEND_URL + "/cart.json", data);
  const id = response.data.name;

  return id;
}

export async function getCart() {
  const response = await axios.get(BACKEND_URL + "/cart.json");
  const loadedCart = [];

  for (const key in response.data) {
    loadedCart.push({
      mealId: key,
      ...response.data[key],
    });
  }

  return loadedCart;
}

export async function updateCart(id, data) {
  await axios.put(BACKEND_URL + `/cart/${id}.json`, data);
}

export async function deleteCart(id) {
  await axios.delete(BACKEND_URL + `/cart/${id}.json`);
}

// FAVORITES DATA
export async function storeFavorites(data) {
  const response = await axios.post(BACKEND_URL + "/favorites.json", data);
  return response.data.name;
}
export async function deleteFavorite(id) {
  await axios.delete(BACKEND_URL + `/favorites/${id}.json`);
}

export async function getFavorites() {
  const response = await axios.get(BACKEND_URL + "/favorites.json");
  const loadedFav = [];

  for (const key in response.data) {
    loadedFav.push({
      favId: key,
      ...response.data[key],
    });
  }

  return loadedFav;
}
