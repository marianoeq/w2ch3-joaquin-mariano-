import { aLength } from "./length.js";
import { aPush } from "./push.js";
import { aPop } from "./pop.js";
import { aUnshift } from "./unshift.js";
describe("Given aLength function", () => {
  describe("when We have an array", () => {
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
  describe("when We have an array", () => {
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
describe("Given aPop function", () => {
  describe("We have an array", () => {
    test("Then array [1,2,3] should return 3", () => {
      const r = aPop([1, 2, 3]);
      expect(r).toEqual(3);
    });
  });
});
describe("Given aUnshift function", () => {
  describe("when we have an array of three items", () => {
    test("Then array [1,2,3] should return 4", () => {
      const r = aUnshift([1, 2, 3]);
      expect(r).toEqual(4);
    });
  });
});
