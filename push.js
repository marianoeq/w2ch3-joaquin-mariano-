import { aLength } from "./length";
export const aPush = (arr, item) => {
  arr[aLength(arr)] = item;
  return aLength(arr);
};
