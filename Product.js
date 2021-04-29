import { call } from "./API.js";

export const products = async () => await call("products");

export const product = (data) => {
  let productHtml = "";

  data.map((item) => {
    productHtml += `
    <div class="product"  onclick="singleProduct(this, event)" >
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
        <p product__info-paragraph>cost: $${item.price}</p>
      </div>
      
  </div>

`;
  });

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
