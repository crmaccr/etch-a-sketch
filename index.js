const container = document.createElement("div"); // overall container
container.classList.add("container");

const grid = document.createElement("div");
grid.classList.add("grid");

const resetButton = document.createElement("button");
resetButton.classList.add("reset");
resetButton.textContent = "reset";

resetButton.addEventListener("click", function () {
  let newGridSize = 0;
  do {
    newGridSize = +prompt("enter new Grid Size (< 100)", "25");
  } while (newGridSize > 100);
  if (newGridSize) {
    displayGrid(newGridSize);
  }
});

displayGrid(16);

container.appendChild(resetButton);
container.appendChild(grid);
document.body.appendChild(container);

function createGridCells(size) {
  const cells = [];
  const square = document.createElement("div");
  square.classList.add("square");
  const squareSize = Math.floor(600 / (size + 1)); // To allow space for gap in the grid
  square.style.cssText = `height:${squareSize}px; width:${squareSize}px;`;
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      cells.push(square.cloneNode());
    }
  }
  setupListenersForGridCells(cells);
  return cells;
}

function setupListenersForGridCells(cells) {
  cells.forEach(function (cell) {
    cell.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "yellow";
    });
  });
}

function addCellsToGrid(cells, cellGrid = grid) {
  cellGrid.innerHTML = "";
  cells.forEach(function (cell) {
    cellGrid.appendChild(cell);
  });
}

function displayGrid(size) {
  const cells = createGridCells(size);
  addCellsToGrid(cells);
}
