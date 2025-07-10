function placeShip(grid, size, shipIcon) {
  const directions = [
    [0, 1],
    [1, 0],
  ];
  let placed = false;
  while (!placed) {
    const startRow = Math.floor(Math.random() * grid.grid.length);
    const startCol = Math.floor(Math.random() * grid.grid[0].length);
    const [dRow, dCol] = directions[Math.floor(Math.random() * directions.length)];
    const shipCoords = [];
    let canPlace = true;
    for (let i = 0; i < size; i++) {
      const newRow = startRow + dRow * i;
      const newCol = startCol + dCol * i;
      if (
        newRow >= grid.grid.length ||
        newCol >= grid.grid[0].length ||
        grid.grid[newRow][newCol].value !== "-"
      ) {
        canPlace = false;
        break;
      }
      shipCoords.push([newRow, newCol]);
    }
    if (canPlace) {
      for (const [row, column] of shipCoords) {
        grid.grid[row][column].value = shipIcon;
      }
      placed = true;
    }
  }
}

module.exports = placeShip;
