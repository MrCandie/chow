const DUMMY_DATA = [
  {
    id: "d1",
    name: "jollof rice & BBQ",
    images: "/images/jolloff.jfif",
    price: 850,
    key: "deplace",
  },
  {
    id: "d2",
    name: "fried rice and chicken stew",
    images: "/images/fried.jfif",
    price: 900,
    key: "deplace",
  },
  {
    id: "d3",
    name: "jollof rice and chicken",
    images: "/images/jolloff.jfif",
    price: 900,
    key: "deplace",
  },
  {
    id: "d4",
    name: "asun rice",
    images: "/images/asun.jfif",
    price: 1200,
    key: "deplace",
  },

  {
    id: "ch1",
    name: "full rotisserir chicken",
    images: "/images/full.jfif",
    price: 6400,
    key: "chicken",
  },
  {
    id: "ch2",
    name: "citizen meal",
    images: "/images/citizen.jfif",
    price: 2000,
    key: "chicken",
  },
  {
    id: "ch3",
    name: "refuel max meal",
    images: "/images/refuel.jfif",
    price: 1350,
    key: "chicken",
  },
  {
    id: "ch4",
    name: "big boyz meal",
    images: "/images/big.jfif",
    price: 3500,
    key: "chicken",
  },
];

const DUMMY_STORES = [
  { id: "c1", image: "/images/deplace.jfif", name: "de place" },
  { id: "c2", image: "/images/chicken.png", name: "chicken republic" },
  { id: "c3", image: "/images/kfc.png", name: "KFC" },
  { id: "c4", image: "/images/dominos.png", name: "dominos" },
];

export function dummyStores() {
  return DUMMY_STORES;
}

export function getDeplaceMeal(id) {
  return DUMMY_DATA.find((item) => item.id === id);
}

export function getMeal(id) {
  return DUMMY_DATA.find((item) => item.id === id);
}

export function deplaceDummyData() {
  return DUMMY_DATA;
}

export async function storeData() {
  const res = await fetch(
    "https://chow-d2355-default-rtdb.firebaseio.com/chow.json"
  );
  const data = await res.json();
  const loadedData = [];
  for (const key in data) {
    loadedData.push({
      id: key,
      ...data[key],
    });
  }
  return loadedData;
}

export async function chickenData() {
  const res = await fetch(
    "https://chow-d2355-default-rtdb.firebaseio.com/chicken.json"
  );
  const data = await res.json();

  const chickenData = [];
  for (const key in data) {
    chickenData.push({
      id: key,
      ...data[key],
    });
  }
  return chickenData;
}

export async function getChicken(id) {
  const chicken = await chickenData();

  return chicken.find((item) => item.id === id);
}

export async function deplaceData() {
  const res = await fetch(
    "https://chow-d2355-default-rtdb.firebaseio.com/deplace.json"
  );
  const data = await res.json();
  const loadedData = [];
  for (const key in data) {
    loadedData.push({
      id: key,
      ...data[key],
    });
  }

  return loadedData;
}

export async function getDeplace(id) {
  const deplace = await deplaceData();

  return deplace.find((item) => item.id === id);
}
