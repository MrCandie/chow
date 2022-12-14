import axios from "axios";

const BACKEND_URL = "https://chow-d2355-default-rtdb.firebaseio.com";

export async function postCart(data, token) {
  const response = await axios.post(
    BACKEND_URL + `/cart.json?auth=${token}`,
    data
  );
  const id = response.data.name;

  return id;
}

export async function getCart(token) {
  const response = await axios.get(BACKEND_URL + `/cart.json?auth=${token}`);
  const loadedCart = [];

  for (const key in response.data) {
    loadedCart.push({
      mealId: key,
      ...response.data[key],
    });
  }

  return loadedCart;
}

export async function updateCart(id, data, token) {
  await axios.put(BACKEND_URL + `/cart/${id}.json?auth=${token}`, data);
}

export async function deleteCart(id, token) {
  await axios.delete(BACKEND_URL + `/cart/${id}.json?auth=${token}`);
}

// FAVORITES DATA
export async function storeFavorites(data, token) {
  const response = await axios.post(
    BACKEND_URL + `/favorites.json?auth=${token}`,
    data
  );
  return response.data.name;
}
export async function deleteFavorite(id, token) {
  await axios.delete(BACKEND_URL + `/favorites/${id}.json?auth=${token}`);
}

export async function getFavorites(token) {
  const response = await axios.get(
    BACKEND_URL + `/favorites.json?auth=${token}`
  );
  const loadedFav = [];

  for (const key in response.data) {
    loadedFav.push({
      favId: key,
      ...response.data[key],
    });
  }

  return loadedFav;
}
