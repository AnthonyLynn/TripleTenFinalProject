import { baseUrl } from "./constants.js";
import { request } from "./api.js";

export function signup({ username, email, password }) {
  return request(`${baseUrl}/signup`, {
    method: "POST",
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function signin({ email, password }) {
  return request(`${baseUrl}/signin`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function getUserInfo(token) {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}
