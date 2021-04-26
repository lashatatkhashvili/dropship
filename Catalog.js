import { products, product } from "./API.js";

const productsWrapper = document.querySelector(".products-wrapper");
const search = document.querySelector("#search");

const getProducts = async () => {
  const data = await products();

  productsWrapper.innerHTML = product(data);
};

getProducts();

const searchFunc = async (e) => {
  e.preventDefault();
  const data = await products();

  let arr = data.filter(
    (item) =>
      item.title.toUpperCase().indexOf(e.target.value.toUpperCase()) !== -1
  );
  console.log(arr, e.target.value);
  productsWrapper.innerHTML = product(arr);
};

search.addEventListener("keyup", searchFunc);
search.addEventListener("submit", searchFunc);
