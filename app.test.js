import { aLength } from "./length.js";
import { aPush } from "./push.js";
import { aPop } from "./pop.js";
import { aUnshift } from "./unshift.js";
import { aShift } from "./shift.js";
import { aSome } from "./some.js";
import { aEvery } from "./every.js";
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
describe("Given aShift function", () => {
  describe("when we have an array of three items", () => {
    test("Then array [1,2,3] should return 1", () => {
      const r = aShift([1, 2, 3]);
      expect(r).toEqual(1);
    });
  });
});
describe("Given aSome function", () => {
  describe("when we have an array and a condition which test if some element is even", () => {
    test("Then array [1,2,3] should return true", () => {
      const arr = [1, 2, 3];
      const r = aSome(arr);
      expect(r).toEqual(true);
    });
  });
});
describe("Given aEvery function", () => {
  describe("when we have an array and a condition which an element is minor than 40", () => {
    test("Then array [1,2,3,39] should return true", () => {
      const arr = [1, 2, 3, 39];
      const r = aEvery(arr);
      expect(r).toEqual(true);
    });
  });
});
