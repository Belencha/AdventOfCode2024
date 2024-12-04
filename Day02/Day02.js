const fs = require("fs").promises;

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

const validateReportRemovingOneItemIfNeeded = (report) => {
  let isValid = validateReport(report);

  if (!isValid) {
    for (let i = 0; i < report.length && !isValid; i++) {
      const testReport = report.filter((_, index) => index !== i);
      isValid = validateReport(testReport);
    }
  }

  return isValid;
};

const countStillSafeReports = (matrix) => {
  return matrix.reduce(
    (acc, current) =>
      validateReportRemovingOneItemIfNeeded(current) ? acc + 1 : acc + 0,
    0
  );
};

const readInputDataFile = async () => {
  const matrix = [];

  try {
    const data = await fs.readFile("Day02.input.txt", "utf8");

    // Split the content by lines
    const lines = data.trim().split("\n");

    // Loop through each line and split by space to get the values
    lines.forEach((line) => {
      const values = line.trim().split(/\s+/).map(Number);
      matrix.push(values);
    });

    return matrix;
  } catch (err) {
    console.error("Error reading file:", err);
    return matrix; // return empty lists in case of an error
  }
};

const main = async () => {
  const inputData = `3   4\n4   3\n2   5\n1   3\n3   9\n3   3`;

  //const result = parseData(inputData);
  const result = await readInputDataFile();

  console.log({ result });

  const numberOfSafeReports = countSafeReports(result);

  console.log({ numberOfSafeReports });
};

// Execute main function
if (require.main === module) {
  main();
}

module.exports = {
  parseData,
  validateReport,
  countSafeReports,
  validateReportRemovingOneItemIfNeeded,
  countStillSafeReports,
};
