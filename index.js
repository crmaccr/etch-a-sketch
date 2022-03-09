const container = document.createElement("div");
container.classList.add("container");

const grid = document.createElement("div");
grid.classList.add("grid");

const resetButton = document.createElement("button");
resetButton.classList.add("reset");
resetButton.textContent = "reset";

container.appendChild(resetButton);

createAndDisplayGrid(16);

function setupListenersForGridCells() {
  const gridSquares = grid.querySelectorAll("div");
  gridSquares.forEach(function (grid) {
    grid.addEventListener("mouseenter", function () {
      console.log("hovered over me");
      this.style.backgroundColor = "yellow";
    });
  });
}

resetButton.addEventListener("click", function () {
  let newGridSize = 0;
  do {
    newGridSize = +prompt("enter new Grid Size (< 100)", "25");
  } while (newGridSize > 100);
  if (newGridSize) {
    createAndDisplayGrid(newGridSize);
  }
});

function createAndDisplayGrid(size) {
  const square = document.createElement("div");
  square.classList.add("square");
  const squareSize = 600 / size;
  square.style.cssText = `height:${squareSize}px; width:${squareSize}px;`;
  grid.innerHTML = "";
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      grid.appendChild(square.cloneNode());
    }
  }
  setupListenersForGridCells();
}
container.appendChild(grid);
document.body.appendChild(container);
