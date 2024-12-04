const { parseData, calculateTotal } = require("./Day03");

describe("Day 3 algorithm", () => {
  it("should read the data and store it in an array", () => {
    const input =
      "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

    const multipliersArray = parseData(input);

    expect(multipliersArray).toEqual([
      [2, 4],
      [5, 5],
      [11, 8],
      [8, 5],
    ]);
  });

  it("should calculate the multiplication of every multipliers pair and sum the values", () => {
    const input =
      "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
    const multipliersArray = parseData(input);

    const sum = calculateTotal(multipliersArray);
    expect(sum).toEqual(161);
  });
});
