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
