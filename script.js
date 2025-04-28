let squaresPerSide, numSquares, squarePixels;

const newGrid = document.querySelector(".newGrid");
const grid = document.querySelector(".grid");
createGrid(16);

grid.addEventListener("mouseover", (e) => changeColor(e.target));
newGrid.addEventListener("click", resetGrid);

function changeColor(sq) {
    //sq.style.backgroundColor = "blue";
    const currentOpacity = Number(getComputedStyle(sq).opacity);
    if (currentOpacity === 1) {
        const rgb = `rgb(${rand()},${rand()},${rand()})`;
        sq.style.backgroundColor = rgb;
        sq.style.opacity = "0.9";
    } else if (currentOpacity > 0) {
        sq.style.opacity = String(currentOpacity - 0.1);
    }
}

function createGrid(n) {  
    squaresPerSide = n;
    numSquares = squaresPerSide * squaresPerSide;
    squarePixels = 960 / squaresPerSide;

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

function resetGrid() {
    let newSize;
    do {
        newSize = Number(prompt("Number of squares per side (max 100)", "16"));
    } while (newSize < 0 || newSize > 100); 
    deleteGrid();
    createGrid(newSize);
}

function rand() {
    return 160 + Math.floor(96*Math.random());
}
