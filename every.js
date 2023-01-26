export const aEvery = (arr) => {
  let result = true;
  const fc = (elem) => {
    if (elem > 40) {
      result = false;
    }
  };

  for (let i = 0; i < arr.length; i++) {
    fc(arr[i]);
  }

  return result;
};
