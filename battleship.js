const rs = require("readline-sync");

const gridSizes = ["4x4", "5x5", "6x6"];
const gridTable = {
  // Creates a 4x4 grid: an array of 4 rows
  "4x4": Array(4)
    // Fills each row with a null value.
    .fill(null)
    // Replaces each null with an array of 4 "-" elements.
    .map(() => Array(4).fill("-")),
  // Creates a 5x5 grid: an array of 5 rows
  "5x5": Array(5)
    .fill(null)
    .map(() => Array(5).fill("-")),
  // Creates a 6x6 grid: an array of 6 rows
  "6x6": Array(6)
    .fill(null)
    .map(() => Array(6).fill("-")),
};

function greetMenu() {
  console.log("Welcome to Battleship 🚢");
  const gridSizeIndex = rs.keyInSelect(gridSizes, "Choose a Board Size");
  // console.log(gridSizeIndex);
  // console.log(gridSizes[gridSizeIndex]);
  // console.log(typeof gridSizes[gridSizeIndex]);
  if (gridSizeIndex === -1) {
    console.log("No selecton was made. Exiting game.");
    process.exit();
  }
  return gridSizes[gridSizeIndex];
}

const chosenGridSize = greetMenu();
const chosenGrid = gridTable[chosenGridSize];

function displayGrid(grid) {
  const rowLabels = ["A", "B", "C", "D", "E", "F"];
  let columnHeader = "  ";
  let rowLabelsIndex = 0;
  for (let i = 0; i < grid[0].length; i++) {
    columnHeader += i + " ";
  }
  console.log(columnHeader);
  for (const row of grid) {
    console.log(rowLabels[rowLabelsIndex] + " " + row.join(" "));
    rowLabelsIndex++;
  }
}

displayGrid(chosenGrid);
