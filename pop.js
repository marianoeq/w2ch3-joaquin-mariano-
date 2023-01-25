export const aPop = (arr) => {
  const r = arr[arr.length - 1];
  arr.length -= 1;
  console.log(arr);
  return r;
};
