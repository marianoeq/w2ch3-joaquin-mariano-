export const aPop = (arr) => {
  const r = arr[arr.length - 1];
  arr.length = arr.length - 1;
  console.log(arr);
  return r;
};

console.log(aPop([1, 2, 3]));
