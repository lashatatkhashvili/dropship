import { SERVER_ADRESS } from "./Variables.js";

const call = async (url) => {
  const request = await fetch(SERVER_ADRESS + url);
  const data = await request.json();

  return data;
};

export const products = async () => await call("products");

export const product = (data) => {
  let productHtml = "";

  data.map((item) => {
    productHtml += `
    <div class="product">
      <div class="product__image">
        <img
          src = ${item.image}
          alt="product image"
          height="127"
          width="191"
        />
      </div>
    <div class="product__name">
      <h3 class="product__name-heading">
        ${item.title}
      </h3>
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
