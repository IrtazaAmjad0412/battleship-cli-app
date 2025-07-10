function displayGrid(grid, debug = false) {
  const rowLabels = ["A", "B", "C", "D", "E", "F"];
  let columnHeader = "   ";
  for (let i = 0; i < grid.grid.length; i++) {
    columnHeader += i.toString().padEnd(4, " ");
  }
  console.log(columnHeader);
  let rowIndex = 0;
  for (const row of grid.grid) {
    let rowStr = rowLabels[rowIndex].padEnd(3, " ");
    for (const cell of row) {
      let displayValue;
      if (debug) {
        displayValue = cell.value;
      } else {
        if (cell.hit) {
          if (cell.value === "-") {
            displayValue = "!";
          } else {
            displayValue = cell.value;
          }
        } else {
          displayValue = "-";
        }
      }
      rowStr += displayValue.padEnd(4, " ");
    }
    console.log(rowStr.trim());
    rowIndex++;
  }
}

module.exports = displayGrid;
