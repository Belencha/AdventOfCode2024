const {
  parseData,
  orderLists,
  diffLists,
  calculateDistance,
} = require("./Day01");

describe("Day 1 algorithm", () => {
  it("should store the input data lists into two different arrays", () => {
    const input = `3   4\n4   3\n2   5\n1   3\n3   9\n3   3`;
    const result = parseData(input);

    expect(result.list1).toEqual([3, 4, 2, 1, 3, 3]);
    expect(result.list2).toEqual([4, 3, 5, 3, 9, 3]);
  });

  it("should order ascending both list arrays", () => {
    const input = `3   4\n4   3\n2   5\n1   3\n3   9\n3   3`;
    const result = parseData(input);
    const orderedResult = orderLists(result);

    expect(orderedResult.list1).toEqual([1, 2, 3, 3, 3, 4]);
    expect(orderedResult.list2).toEqual([3, 3, 3, 4, 5, 9]);
  });

  it("should gather a list with the diff among lists, item by item", () => {
    const input = `3   4\n4   3\n2   5\n1   3\n3   9\n3   3`;
    const result = parseData(input);
    const orderedResult = orderLists(result);
    const diffList = diffLists(orderedResult);

    expect(diffList).toEqual([2, 1, 0, 1, 2, 5]);
  });

  it("should sum up all the differences and get a total distance", () => {
    const input = `3   4\n4   3\n2   5\n1   3\n3   9\n3   3`;
    const result = parseData(input);
    const orderedResult = orderLists(result);
    const diffList = diffLists(orderedResult);
    const distance = calculateDistance(diffList);

    expect(distance).toEqual(11);
  });
});
