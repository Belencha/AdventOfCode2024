const { parseData, validateReport } = require("./Day02");

const hardCodedMatrix = [
  [7, 6, 4, 2, 1],
  [1, 2, 7, 8, 9],
  [9, 7, 6, 2, 1],
  [1, 3, 2, 4, 5],
  [8, 6, 4, 4, 1],
  [1, 3, 6, 7, 9],
];

const validationMatrix = [true, false, false, false, false, true];

const matrixData = hardCodedMatrix.map((item, index) => [
  item,
  validationMatrix[index],
]);

describe("Day 2 algorithm", () => {
  it("should read the data and store it in a dynamic matrix", () => {
    const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

    const matrix = parseData(input);

    expect(matrix).toEqual(hardCodedMatrix);
  });

  describe("Reports tests", () => {
    it.each(matrixData)(
      "should check if the report %j is valid %s",
      (report, expectedValidity) => {
        const isReportValid = validateReport(report);
        expect(isReportValid).toBe(expectedValidity);
      }
    );
  });
});
