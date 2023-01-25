import { aLength } from "./length.js";

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
