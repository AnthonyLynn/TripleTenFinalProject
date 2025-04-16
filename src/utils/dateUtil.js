import { monthNames } from "./constants";

export function isoToMonthDayYear(iso) {
  const date = new Date(iso);
  return `${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
}
