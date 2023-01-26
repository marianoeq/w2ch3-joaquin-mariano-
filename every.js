export const aEvery = (arr) => {
  let result = true;
  const fc = (elem) => {
    if (elem > 40) {
      result = false;
    }
  };

  for (const i of arr) {
    fc(arr[i]);
  }

  return result;
};
