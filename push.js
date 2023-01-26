import { aLength } from "./length.js";
export const aPush = (arr, item) => {
  arr[aLength(arr)] = item;
  return aLength(arr);
};
