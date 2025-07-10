const rs = require("readline-sync");

function fireShot(grid) {
  const size = grid.grid.length;
  const rowLabels = "ABCDEF";
  while (true) {
    const input = rs.question("Make a guess eg.. A1, B2, etc...").toUpperCase().trim();
    if (input.length < 2) {
      console.log("Invalid input. Please enter a letter followed by a number.");
      continue;
    }
    const rowChar = input[0];
    const colStr = input.slice(1);
    const row = rowLabels.indexOf(rowChar);
    const col = parseInt(colStr, 10) - 1;
    if (row === -1 || row >= size || isNaN(col) || col < 0 || col >= size) {
      console.log("Coordinates out of bounds. Try again.");
      continue;
    }
    const cell = grid.grid[row][col];
    if (cell.hit) {
      console.log("You already fired at this coordinate. Choose another one.");
      continue;
    }
    cell.hit = true;
    if (cell.value === "-") {
      console.log("Miss!");
      return false;
    } else {
      console.log(`Hit! You hit a ship at ${rowChar}${col + 1}`);
      return true;
    }
  }
}

module.exports = fireShot;
