export const Alldata = async () => {
  let res = await fetch("http://localhost:8000/allcars");
  let data = await res.json();
  return data;
};

export const Feature = async () => {
  let res = await fetch("http://localhost:8000/feature");
  let data = await res.json();
  return data;
};
