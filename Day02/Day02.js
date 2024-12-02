const parseData = (input) => {
  const matrix = [];

  const reports = input.split("\n");
  reports.map((line) => {
    const lineValues = line.replace(/\s+/g, " ").trim().split(" ").map(Number);
    matrix.push(lineValues);
  });

  return matrix;
};

module.exports = {
  parseData,
};
