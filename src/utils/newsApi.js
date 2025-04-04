import { newsApiBaseUrl } from "./constants.js";
import { request } from "./api.js";

export function getNewsSources({ searchTerm, apiKey }) {
  let date = new Date();
  const currentDate = date.toISOString();
  date.setDate(date.getDate() - 7);
  const oldDate = date.toISOString();

  return request(
    `${newsApiBaseUrl}?q=${searchTerm}&from=${oldDate}&to=${currentDate}&pageSize=100&language=en&sortBy=popularity&apiKey=${apiKey}`
  );
}
