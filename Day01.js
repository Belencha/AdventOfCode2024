const fs = require("fs").promises;

const readInputDataFile = async () => {
  const list1 = [];
  const list2 = [];

  try {
    const data = await fs.readFile("Day01.input.txt", "utf8");

    // Split the content by lines
    const lines = data.trim().split("\n");

    // Loop through each line and split by space to get the values
    lines.forEach((line) => {
      const [first, second] = line.trim().split(/\s+/).map(Number);
      list1.push(first);
      list2.push(second);
    });

    return { list1, list2 };
  } catch (err) {
    console.error("Error reading file:", err);
    return { list1, list2 }; // return empty lists in case of an error
  }
};

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

const orderLists = (lists) => {
  const list1 = lists.list1.sort((a, b) => a - b);
  const list2 = lists.list2.sort((a, b) => a - b);

  return { list1, list2 };
};

const diffLists = (orderedLists) => {
  return orderedLists.list1.map(
    (item1, index) => orderedLists.list2[index] - item1
  );
};

const calculateDistance = (diffList) => {
  return diffList.reduce((item, acc) => item + acc, 0);
};

// Main function to be executed when running with 'node Day01.js'
const main = async () => {
  const inputData = `3   4\n4   3\n2   5\n1   3\n3   9\n3   3`;

  //const result = parseData(inputData);
  const result = await readInputDataFile();

  console.log("List 1:", result.list1);
  console.log("List 2:", result.list2);

  const resultOrdered = orderLists(result);
  console.log("Ordered List 1:", resultOrdered.list1);
  console.log("Ordered List 2:", resultOrdered.list2);

  const diffList = diffLists(resultOrdered);
  console.log("Diff list:", diffList);

  const totalDistance = calculateDistance(diffList);
  console.log("Total distance:", totalDistance);
};

// Execute main function
if (require.main === module) {
  main();
}

module.exports = { parseData, orderLists, diffLists, calculateDistance };
