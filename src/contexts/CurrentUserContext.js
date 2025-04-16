import { createContext } from "react";
export const CurrentUserContext = createContext({
  username: "",
  email: "",
  _id: "",
});
