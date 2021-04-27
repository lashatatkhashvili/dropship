import { call } from "./API.js";

export const products = async () => await call("products");

export const product = (data) => {
  let productHtml = "";

  data.map((item) => {
    productHtml += `
    <div class="product">
      <div class="product__add">
        <input type="checkbox" class="product__check" onclick="check(this)"/>
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
        <p product__info-paragraph>cost: $${item.price}</p>
      </div>
  </div>

`;
  });

  return productHtml;
};

export const loading = `<div class="product" style="min-height: 350px">
<div class="product__image">
  <img src="./assets/load.gif" width="50" height="50" />
</div>
</div>
<div class="product" style="min-height: 350px">
<div class="product__image">
  <img src="./assets/load.gif" width="50" height="50" />
</div>
</div>
<div class="product" style="min-height: 350px">
<div class="product__image">
  <img src="./assets/load.gif" width="50" height="50" />
</div>
</div>
<div class="product" style="min-height: 350px">
<div class="product__image">
  <img src="./assets/load.gif" width="50" height="50" />
</div>
</div>
<div class="product" style="min-height: 350px">
<div class="product__image">
  <img src="./assets/load.gif" width="50" height="50" />
</div>
</div>
<div class="product" style="min-height: 350px">
<div class="product__image">
  <img src="./assets/load.gif" width="50" height="50" />
</div>
</div>
<div class="product" style="min-height: 350px">
<div class="product__image">
  <img src="./assets/load.gif" width="50" height="50" />
</div>
</div>
<div class="product" style="min-height: 350px">
<div class="product__image">
  <img src="./assets/load.gif" width="50" height="50" />
</div>
</div>
<div class="product" style="min-height: 350px">
<div class="product__image">
  <img src="./assets/load.gif" width="50" height="50" />
</div>
</div>`;
