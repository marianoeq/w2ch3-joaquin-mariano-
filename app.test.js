import { aLength } from "./length.js";
import { aPush } from "./push.js";
describe("Given aLength function", () => {
  describe("We have an array", () => {
    test("Then length of [1,2,3] should be 3", () => {
      const r = aLength([]);
      expect(r).toEqual(0);
    });
    test("Then length of [1,2,3] should be 3", () => {
      const r = aLength([1, 2, 3]);
      expect(r).toEqual(3);
    });
  });
});

describe("Given aPush function", () => {
  describe("We have an array", () => {
    test("Then length of array 3 should be 4", () => {
      const r = aPush([1, 2, 3], 4);
      expect(r).toEqual(4);
    });
    test("Then length of array of 0 should be 1", () => {
      const r = aPush([], 1);
      expect(r).toEqual(1);
    });
  });
});
