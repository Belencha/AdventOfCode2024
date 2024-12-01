const parseData = (input) => {
  // leer input hasta \n y de ahí, push a un array y push a otro separados por un espacio
  const list1 = [];
  const list2 = [];

  const lines = input.split("\n");
  lines.map((line) => {
    const [itemA, itemB] = line.replace(/\s+/g, " ").trim().split(" ");
    list1.push(Number(itemA));
    list2.push(Number(itemB));
  });

  return { list1, list2 };
};

// Main function to be executed when running with 'node Day01.js'
const main = () => {
  const inputData = `3   4\n4   3\n2   5\n1   3\n3   9\n3   3`;

  const result = parseData(inputData);
  console.log("List 1:", result.list1);
  console.log("List 2:", result.list2);
};

// Execute main function
if (require.main === module) {
  main();
}

module.exports = { parseData };
