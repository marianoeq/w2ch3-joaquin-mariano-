export const aShift = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr[i] = arr[i + 1];
  }

  return arr[0];
};
