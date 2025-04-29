const newGrid = document.querySelector(".newGrid");
const grid = document.querySelector(".grid");

createGrid(16);

newGrid.addEventListener("click", resetGrid);
grid.addEventListener("mouseover", (e) => changeColor(e.target));

function resetGrid() {
    let newSize;
    do {
        newSize = Number(prompt("Number of squares per side (max 100)", "16"));
    } while (newSize < 0 || newSize > 100);
    deleteGrid();
    createGrid(newSize);
}

function createGrid(squaresPerSide) {
    const numSquares = squaresPerSide * squaresPerSide;
    const squarePixels = 960 / squaresPerSide;

    for (i = 0; i < numSquares; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.style.width = `${squarePixels}px`;
        newSquare.style.height = `${squarePixels}px`;
        newSquare.style.opacity = "1";
        grid.appendChild(newSquare)
    }
}

function deleteGrid() {
    allSquares = document.querySelectorAll(".square");
    allSquares.forEach(element => element.remove());
}

function changeColor(sq) {
    sq.style.backgroundColor = randomPastelColor();
    if (sq.style.opacity > 0) {
        sq.style.opacity -= 0.1;
    }
}

function randomPastelColor() {
    return `rgb(${rand(160)},${rand(160)},${rand(160)})`
}

// random value between minValue and 256
function rand(minValue) {
    return minValue + Math.floor((256 - minValue) * Math.random());
}
