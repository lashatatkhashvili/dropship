import { products, product } from "./API.js";

const productsWrapper = document.querySelector(".products-wrapper");
const search = document.querySelector("#search");
const sort = document.querySelector("#sort");

// Products

const getProducts = async () => {
  const data = await products();

  productsWrapper.innerHTML = product(data);
};

getProducts();

// Search

const searchFunc = async (e) => {
  const data = await products();

  let arr = data.filter(
    (item) =>
      item.title.toUpperCase().indexOf(e.target.value.toUpperCase()) !== -1
  );

  productsWrapper.innerHTML = product(arr);
};

search.addEventListener("keyup", searchFunc);

// Sort

const sortFunc = async (e) => {
  const data = await products();

  let arr = data;

  e.target.value == "low" && (arr = data.sort((a, b) => a.price - b.price));
  e.target.value == "high" && (arr = data.sort((a, b) => b.price - a.price));

  productsWrapper.innerHTML = product(arr);
};

sort.addEventListener("change", sortFunc);
