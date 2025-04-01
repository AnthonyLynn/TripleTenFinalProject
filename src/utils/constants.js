export const APIkey = "732ae448c1334cd38916a45f41d212d0";

export const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export const baseUrl = "http://localhost:3001";
