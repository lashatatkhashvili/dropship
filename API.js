import { SERVER_ADRESS } from "./Variables.js";

export const call = async (url) => {
  const request = await fetch(SERVER_ADRESS + url);
  const data = await request.json();

  return data;
};
