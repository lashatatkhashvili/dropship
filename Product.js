import { call } from "./API.js";

export const products = async () => await call("products");

export const product = (data) => {
  let productHtml = "";

  data.map((item) => {
    productHtml += `
    <div class="product"  onclick="modalProduct(this, event)" >
    <div  class=${item.id}  style="display: none"></div>
      <div class="product__add">
        <div class="round">
          <input type="checkbox" id="${item.id}" class="product__check" onclick="check(this)"/>
          <label for="${item.id}"></label>
        </div>
        
        <label for="check" class="product__check-label"
          >Add To Inventory</label
        >
      </div>
      <div class="product__image">
        <img
          src="${item.image}"
          alt="product image"
          height="127"
          width="191"
        />
      </div>
      <div class="product__name">
        <h3 class="product__name-heading">${item.title}</h3>
      </div>
      <div class="product__info">
        <p product__info-paragraph>RRP: $6</p>
        <p product__info-paragraph>Profit: 25% / $2</p>
        <p product__info-paragraph>Cost: $${item.price}</p>
      </div>
      
  </div>

`;
  });

  return productHtml;
};

export const singleProduct = (item) => {
  let productHtml = "";

  productHtml += `
    <div class="single-product__wrapper">
        <span class="close-modal" onclick="closeModal(this)">&times;</span>
        <div class="single-product__content">
          <div class="single-product__left">
            <div class="single-product__prices">
              <p single-product__paragraph>RRP: $6</p>
              <p single-product__paragraph>Profit: 25% / $2</p>
              <p single-product__paragraph>Cost: ${item.price}</p>
            </div>

            <div class="single-product__album">
              <img
                src="${item.image}"
                alt="product big"
                class="single-product__image"
              />

              <img
                src="${item.image}"
                alt="product small"
                class="single-product__image-small"
              />
            </div>
          </div>
          <div class="single-product__right">
            <h2 class="single-product__title">
             ${item.title}
            </h2>

            <button class="single-product__btn">ADD TO MY INVENTORY</button>

            <h3 class="single-product__details">Product Details</h3>
            <p class="single-product__details-paragraph"> ${item.description}</p>
          </div>
        </div>
      </div>

`;

  return productHtml;
};

export const loading = `<div class="product" style="min-height: 280px">
<div class="product__image">
  <img src="./assets/load.gif" width="50" height="50" />
</div>
</div>
<div class="product" style="min-height: 280px">
<div class="product__image">
  <img src="./assets/load.gif" width="50" height="50" />
</div>
</div>
<div class="product" style="min-height: 280px">
<div class="product__image">
  <img src="./assets/load.gif" width="50" height="50" />
</div>
</div>
<div class="product" style="min-height: 280px">
<div class="product__image">
  <img src="./assets/load.gif" width="50" height="50" />
</div>
</div>
<div class="product" style="min-height: 280px">
<div class="product__image">
  <img src="./assets/load.gif" width="50" height="50" />
</div>
</div>
<div class="product" style="min-height: 280px">
<div class="product__image">
  <img src="./assets/load.gif" width="50" height="50" />
</div>
</div>
<div class="product" style="min-height: 280px">
<div class="product__image">
  <img src="./assets/load.gif" width="50" height="50" />
</div>
</div>
<div class="product" style="min-height: 280px">
<div class="product__image">
  <img src="./assets/load.gif" width="50" height="50" />
</div>
</div>
<div class="product" style="min-height: 280px">
<div class="product__image">
  <img src="./assets/load.gif" width="50" height="50" />
</div>
</div>`;
