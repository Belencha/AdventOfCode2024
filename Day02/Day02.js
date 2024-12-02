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

  console.log({ report, strictIncreasing, strictDecreasing });

  return strictIncreasing || strictDecreasing;
};

module.exports = {
  parseData,
  validateReport,
};
