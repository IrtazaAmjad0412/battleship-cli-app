const rs = require("readline-sync");
const createGrid = require("./createGrid");
const displayGrid = require("./displayGrid");
const placeShip = require("./placeShip");
const fireShot = require("./fireShot");

const gridSizes = ["4x4", "5x5", "6x6"];
const gridTable = {
  "4x4": {
    grid: createGrid(4),
    ships: [
      { size: 2, icon: "🟠", count: 1 },
      { size: 3, icon: "🔵", count: 1 },
    ],
  },
  "5x5": {
    grid: createGrid(5),
    ships: [
      { size: 2, icon: "🟠", count: 2 },
      { size: 3, icon: "🔵", count: 1 },
    ],
  },
  "6x6": {
    grid: createGrid(6),
    ships: [
      { size: 2, icon: "🟠", count: 2 },
      { size: 3, icon: "🔵", count: 2 },
    ],
  },
};

function greetMenu() {
  console.log("Welcome to Battleship 🚢");
  const index = rs.keyInSelect(gridSizes, "Choose a Board Size");
  if (index === -1) {
    console.log("No selection was made. Exiting game.");
    process.exit();
  }
  return gridSizes[index];
}

function countShipParts(grid) {
  let count = 0;
  for (const row of grid.grid) {
    for (const cell of row) {
      if (cell.value !== "-") count++;
    }
  }
  return count;
}

const chosenGridSize = greetMenu();
const gameBoard = gridTable[chosenGridSize];

for (const ship of gameBoard.ships) {
  for (let i = 0; i < ship.count; i++) {
    placeShip(gameBoard, ship.size, ship.icon);
  }
}

let shipsRemaining = countShipParts(gameBoard);

while (shipsRemaining > 0) {
  console.clear();
  displayGrid(gameBoard, false);
  const hit = fireShot(gameBoard);
  if (hit) {
    shipsRemaining--;
  }
  if (shipsRemaining === 0) {
    console.clear();
    displayGrid(gameBoard, true);
    console.log(`========
__   _______ _   _   _    _ _____ _   _
\\ \\ / /  _  | | | | | |  | |_   _| \\ | |
 \\ V /| | | | | | | | |  | | | | |  \\| |
  \\ / | | | | | | | | |/\\| | | | | . ' |
  | | \\ \\_/ / |_| | \\  /\\  /_| |_| |\\  |
  \\_/  \\___/ \\___/   \\/  \\/ \\___/\\_| \\_/
========`);
    break;
  }
}
