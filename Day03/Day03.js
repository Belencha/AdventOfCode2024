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

const main = async () => {
  const inputData = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;

  const result = parseData(inputData);
  //const result = await readInputDataFile();

  const totalMulCalculation = calculateTotal(result);

  console.log({ totalMulCalculation });
};

// Execute main function
if (require.main === module) {
  main();
}

module.exports = {
  parseData,
  calculateTotal,
};
