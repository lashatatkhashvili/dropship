import { SERVER_ADDRESS } from "./Variables.js";

export const call = async (url) => {
  const request = await fetch(SERVER_ADDRESS + url);
  const data = await request.json();

  return data;
};

// Sort for misha

export const getProducts = async (sort = null) =>
  await call(`products${sort && `?sort=${sort}`}`);
