export const DUMMY_DATA = [
  {
    id: "d1",
    name: "jollof rice & BBQ",
    images: "/images/jolloff.jfif",
    price: 850,
    key: "deplace",
    recommended: true,
  },
  {
    id: "d2",
    name: "fried rice and chicken stew",
    images: "/images/fried.jfif",
    price: 900,
    key: "deplace",
    recommended: true,
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
    recommended: true,
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
  {
    id: "k1",
    name: "zinger burger",
    images: "/images/zinger.jfif",
    price: 3000,
    key: "kfc",
    recommended: true,
  },
  {
    id: "k2",
    name: "KFC spicy rice",
    images: "/images/spicy.jfif",
    price: 1250,
    key: "kfc",
  },
  {
    id: "k3",
    name: "zinger wings",
    images: "/images/wings.jfif",
    price: 3000,
    key: "kfc",
  },
  {
    id: "k4",
    name: "double down",
    images: "/images/double.jfif",
    price: 2900,
    key: "kfc",
  },
  {
    id: "do1",
    name: "pizza duet",
    images: "/images/duet.jfif",
    price: 5900,
    key: "dominos",
  },
  {
    id: "do2",
    name: "spicy mixed pizza",
    images: "/images/pizza.jfif",
    price: 7500,
    key: "dominos",
  },
  {
    id: "do3",
    name: "sharwama pizza",
    images: "/images/sharwama.jfif",
    price: 5900,
    key: "dominos",
  },
  {
    id: "do4",
    name: "pepperoni pizza",
    images: "/images/pepper.jfif",
    price: 5700,
    key: "dominos",
  },
];

const DUMMY_STORES = [
  { id: "c1", image: "/images/deplace.jfif", name: "de place", key: "deplace" },
  {
    id: "c2",
    image: "/images/chicken.png",
    name: "chicken republic",
    key: "chicken",
  },
  { id: "c3", image: "/images/kfc.png", name: "KFC", key: "kfc" },
  {
    id: "c4",
    image: "/images/dominos.png",
    name: "dominos pizza",
    key: "dominos",
  },
];

/////////////////////////////////////
//GET RESTAURANTS
export function dummyStores() {
  return DUMMY_STORES;
}

/////////////////////////////////////
//GET MEALS DETAILS
export function getDeplaceMeal(id) {
  return DUMMY_DATA.find((item) => item.id === id);
}

/////////////////////////////////////
//GET MEALS DETAILS
export function getMeal(id) {
  return DUMMY_DATA.find((item) => item.id === id);
}

/////////////////////////////////////
//ALL MEALS
export function deplaceDummyData() {
  return DUMMY_DATA;
}

/////////////////////////////////////
//RECOMMENDED MEALS
export function recommendedData() {
  return DUMMY_DATA.filter((item) => item.recommended);
}

/////////////////////////////////////
//RESTAURANTS DETAILS
export async function storeData(token) {
  const res = await fetch(
    `https://chow-d2355-default-rtdb.firebaseio.com/chow.json?auth=${token}`
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

/////////////////////////////////////
//CHICKEN REPUBLIC MEALS
export async function chickenData(token) {
  const res = await fetch(
    `https://chow-d2355-default-rtdb.firebaseio.com/chicken.json?auth=${token}`
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

/////////////////////////////////////
//KFC MEALS
export async function kfcData(token) {
  const res = await fetch(
    `https://chow-d2355-default-rtdb.firebaseio.com/kfc.json?auth=${token}`
  );
  const data = await res.json();

  const kfcData = [];
  for (const key in data) {
    kfcData.push({
      id: key,
      ...data[key],
    });
  }
  return kfcData;
}

/////////////////////////////////////
//DOMINOS MEALS
export async function dominosData(token) {
  const res = await fetch(
    `https://chow-d2355-default-rtdb.firebaseio.com/dominos.json?auth=${token}`
  );
  const data = await res.json();

  const dominosData = [];
  for (const key in data) {
    dominosData.push({
      id: key,
      ...data[key],
    });
  }
  return dominosData;
}

/////////////////////////////////////
//CHICKEN REPUBLIC MEAL DETAIL
export async function getChicken(id, token) {
  const chicken = await chickenData(token);

  return chicken.find((item) => item.id === id);
}

/////////////////////////////////////
//KFC MEAL DETAIL
export async function getkfc(id, token) {
  const kfc = await kfcData(token);

  return kfc.find((item) => item.id === id);
}

/////////////////////////////////////
//DOMINOS MEAL DETAIL
export async function getdominos(id, token) {
  const dominos = await dominosData(token);

  return dominos.find((item) => item.id === id);
}

/////////////////////////////////////
//DEPLACE ALL MEALS
export async function deplaceData(token) {
  const res = await fetch(
    `https://chow-d2355-default-rtdb.firebaseio.com/deplace.json?auth=${token}`
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

/////////////////////////////////////
//DEPLACE MEAL DETAIL
export async function getDeplace(id, token) {
  const deplace = await deplaceData(token);

  return deplace.find((item) => item.id === id);
}
