const parseData = (input) => {
  // extraer mult(1-3 digit, 1-3 digit) from the string provided
  const multipliersArray = [];

  const mulRegex = /mul\((\d{1,3}),(\d{1,3})\)/g;

  const mulItems = input.match(mulRegex);

  console.log({ mulItems });

  mulItems.map((mul) => {
    const multiplierA = mul.match(/mul\((\d+),\d+\)/)[1];
    const multiplierB = mul.match(/mul\(\d+,(\d+)\)/)[1];
    multipliersArray.push([Number(multiplierA), Number(multiplierB)]);
  });

  return multipliersArray;
};

module.exports = {
  parseData,
};
