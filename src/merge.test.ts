import { merge } from "./merge";

describe("merge function", () => {
  test("should merge three arrays correctly with basic case", () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [6, 4, 2];
    const collection_3 = [7, 8, 9];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("should handle negative numbers and zero", () => {
    const collection_1 = [-5, -1, 0];
    const collection_2 = [2, -2, -4];
    const collection_3 = [-3, 1, 3];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3]);
  });

  test("should handle duplicate values", () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [5, 3, 1];
    const collection_3 = [2, 3, 4];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 1, 2, 3, 3, 3, 4, 5, 5]);
  });

  // test("should handle empty arrays or single-element arrays", () => {
  //   // All empty
  //   expect(merge([], [], [])).toEqual([]);
  //   // Only one array has elements
  //   expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
  //   // Single-element arrays
  //   expect(merge([5], [3], [7])).toEqual([3, 5, 7]);
  // });

  test("should handle all empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
  });

  test("should handle only one array with elements", () => {
    expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
  });

  test("should handle single-element arrays", () => {
    expect(merge([5], [3], [7])).toEqual([3, 5, 7]);
  });

  test("handle mixed large numbers, zeros, negatives and duplicates", () => {
    const collection_1 = [0, 0, 1, 100, 200, 300];
    const collection_2 = [600, 500, 2, 1, -1];
    const collection_3 = [0, 1, 2, 150, 250, 9999];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([-1, 0, 0, 0, 1, 1, 1, 2, 2, 100, 150, 200, 250, 300, 500, 600, 9999]);
  });
});
