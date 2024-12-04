const {
  parseData,
  validateReport,
  countSafeReports,
  validateReportRemovingOneItemIfNeeded,
  countStillSafeReports,
} = require("./Day02");

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

  it("should calculate how many reports are valid/safe", () => {
    const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

    const matrix = parseData(input);
    const totalSafeReports = countSafeReports(matrix);

    expect(totalSafeReports).toEqual(2);
  });
});

const stillValidationMatrix = [true, false, false, true, true, true];

const secondMatrixData = hardCodedMatrix.map((item, index) => [
  item,
  stillValidationMatrix[index],
]);

describe("Day 2 - Part Two - algorithm", () => {
  describe("Reports tests removing one element if needed", () => {
    it.each(secondMatrixData)(
      "should check if the report %j is still valid %s",
      (report, expectedValidity) => {
        const isReportStillValid =
          validateReportRemovingOneItemIfNeeded(report);

        expect(isReportStillValid).toBe(expectedValidity);
      }
    );
  });

  it("should calculate how many reports are still valid/safe", () => {
    const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

    const matrix = parseData(input);
    const totalSafeReports = countStillSafeReports(matrix);

    expect(totalSafeReports).toEqual(4);
  });
});
