const body = document.body;
const grid = document.createElement("div");
grid.style.cssText = `
display:flex; 
flex-wrap:wrap;
gap:2px;
width:510px;
margin: auto;`;
const square = document.createElement("div");

square.style.cssText = "height:30px; width:30px; background-color:blue;";
for (let i = 1; i <= 16; i++) {
  for (let j = 1; j <= 16; j++) {
    grid.appendChild(square.cloneNode());
  }
}

const gridSquares = grid.querySelectorAll("div");
gridSquares.forEach(function (grid) {
  grid.addEventListener("mouseenter", function () {
    console.log("hovered over me");
    this.style.backgroundColor = "yellow";
  });
});

body.appendChild(grid);
