const parseData = (input) => {
  // extraer mult(1-3 digit, 1-3 digit) from the string provided
  const multipliersArray = [];

  const mulRegex = /mul\((\d{1,3}),(\d{1,3})\)/g;

  const mulItems = input.match(mulRegex);

  mulItems.map((mul) => {
    const multiplierA = mul.match(/mul\((\d+),\d+\)/)[1];
    const multiplierB = mul.match(/mul\(\d+,(\d+)\)/)[1];
    multipliersArray.push([Number(multiplierA), Number(multiplierB)]);
  });

  return multipliersArray;
};

const calculateTotal = (multipliersArray) => {
  const multipliedValues = multipliersArray.map((pair) => pair[0] * pair[1]);
  return multipliedValues.reduce((acc, current) => acc + current, 0);
};

module.exports = {
  parseData,
  calculateTotal,
};
