import { products, product, loading } from "./Product.js";

const productsWrapper = document.querySelector(".products-wrapper");
const search = document.querySelector("#search");
const sort = document.querySelector("#sort");
const add = document.querySelector("#add-all");
const clear = document.querySelector("#clear");
const toggleAdd = document.querySelector("#toggle-add");
const searchBtn = document.querySelector("#search-btn");
const searchHide = document.querySelector("#search-hide");

// Products

const getProducts = async () => {
  productsWrapper.innerHTML = loading;
  const data = await products();

  productsWrapper.innerHTML = product(data);
};

getProducts();

// Search

const searchFunc = async (e) => {
  productsWrapper.innerHTML = loading;
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
  productsWrapper.innerHTML = loading;
  const data = await products();

  let arr = data;

  e.target.value == "low" && (arr = data.sort((a, b) => a.price - b.price));
  e.target.value == "high" && (arr = data.sort((a, b) => b.price - a.price));

  productsWrapper.innerHTML = product(arr);
};

sort.addEventListener("change", sortFunc);

// Add all

const helper = (boolean) => {
  let count = document.querySelector("#count");
  const elems = document.querySelectorAll(".product__check");

  boolean ? (count.innerHTML = 0) : (count.innerHTML = elems.length);
  for (let i = 0; i < elems.length; i++) {
    if (elems[i].checked == boolean) {
      elems[i].parentNode.classList.toggle("product__add--click");
      elems[i].parentNode.parentNode.classList.toggle("product--border");
      elems[i].parentNode.children[1].classList.toggle(
        "product__check-label--non"
      );
      elems[i].checked = !boolean;
    }
  }
};

function addAll() {
  const clear = document.querySelector("#clear");

  clear.classList.remove("content__header-btn--clear");
  helper(false);
}

add.addEventListener("click", addAll);

// Clear

function clearFunc() {
  const clear = document.querySelector("#clear");

  clear.classList.add("content__header-btn--clear");
  helper(true);
}

clear.addEventListener("click", clearFunc);

// Toggle Add

function toggleAddFunc() {
  const elems = document.querySelectorAll(".product__check");

  let check = true;

  for (let i = 0; i < elems.length; i++) {
    if (elems[i].checked == false) {
      check = false;
    }
  }

  helper(check);
}

toggleAdd.addEventListener("click", toggleAddFunc);

//  Search hide-show

const searchToggle = () => {
  if (window.innerWidth < 651) {
    search.classList.toggle("content__search--hide");
    document
      .querySelector(".content__add-btn--small")
      .classList.toggle("content__search--hide");
    searchBtn.classList.toggle("content__search--hide");
    searchHide.classList.toggle("content__search--hide");
  }
};

searchBtn.addEventListener("click", searchToggle);
searchHide.addEventListener("click", searchToggle);
