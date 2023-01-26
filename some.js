import { aLength } from "./length.js";

export const aSome = (arr) => {
  let result = false;
  const fc = (elem) => {
    if (elem % 2 === 0) {
      result = true;
    }
  };

  for (let i = 0; i < aLength(arr); i++) {
    fc(arr[i]);
  }

  return result;
};
