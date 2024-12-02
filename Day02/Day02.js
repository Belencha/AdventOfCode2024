const parseData = (input) => {
  const matrix = [];

  const reports = input.split("\n");
  reports.map((line) => {
    const lineValues = line.replace(/\s+/g, " ").trim().split(" ").map(Number);
    matrix.push(lineValues);
  });

  return matrix;
};

const validateReport = (report) => {
  let strictIncreasing = true;
  let strictDecreasing = true;

  for (i = 0; i < report.length; i++) {
    if (
      (report[i] >= report[i + 1] || report[i + 1] - report[i] > 3) &&
      strictIncreasing
    ) {
      strictIncreasing = false;
    }

    if (
      (report[i] <= report[i + 1] || report[i] - report[i + 1] > 3) &&
      strictDecreasing
    ) {
      strictDecreasing = false;
    }
  }

  return strictIncreasing || strictDecreasing;
};

const countSafeReports = (matrix) => {
  return matrix.reduce(
    (acc, current) => (validateReport(current) ? acc + 1 : acc + 0),
    0
  );
};

module.exports = {
  parseData,
  validateReport,
  countSafeReports,
};
