const newGameButton = document.getElementById("new-game");
newGameButton.addEventListener("click", resetGame);

const cells = [...document.getElementsByClassName("cells")];
cells.forEach((cell) => {
    cell.addEventListener("mouseover", hoverCell);
    cell.addEventListener("mouseout", resetCell);
    cell.addEventListener("click", selectCell);
});

let isXsTurnFirst = true;
let isXsTurn = true;
let isGameWon = false;
let xWins = 0;
let oWins = 0;
let emptySpaces = 9;

const cellNames = [
    ["cell-1", "cell-2", "cell-3"],
    ["cell-4", "cell-5", "cell-6"],
    ["cell-7", "cell-8", "cell-9"],
];

let gameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function getXo() {
    if (isXsTurn) {
        return "X";
    } else {
        return "O";
    }
}

function selectCell() {
    if (!isGameWon && !this.classList[1]) {
        this.innerText = getXo();
        this.style.backgroundColor = "#555";
        this.classList.add("selected");
        this.removeEventListener("mouseout", resetCell);
        updateGameState(this.id);
        emptySpaces--;
        gameOverCheck();
        isXsTurn ? (isXsTurn = false) : (isXsTurn = true);
    }
}

function hoverCell() {
    if (!isGameWon && this.innerText !== "X" && this.innerText !== "O") {
        this.innerText = getXo();
        this.style.backgroundColor = "grey";
    }
}

function resetCell() {
    this.innerText = "";
    this.style.backgroundColor = "#555";
}

function updateGameState(cellName) {
    let indexes = [];
    cellNames.forEach((row, yIndex) => {
        row.forEach((cell, xIndex) => {
            if (cell === cellName) indexes.push(xIndex, yIndex);
        });
    });

    gameState[indexes[1]][indexes[0]] = getXo();
}

function gameOverCheck() {
    let winner = "";
    let winningCells = [];
    const xo = getXo();

    // Checks rows
    gameState.forEach((row, index) => {
        if (
            row.every((cell) => {
                return cell === xo;
            })
        ) {
            isGameWon = true;
            winner = xo;
            winningCells = cellNames[index];
        }
    });

    //Checks columns
    for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
        if (
            gameState.every((row) => {
                return row[columnIndex] === xo;
            })
        ) {
            isGameWon = true;
            winner = xo;
            winningCells = [
                cellNames[0][columnIndex],
                cellNames[1][columnIndex],
                cellNames[2][columnIndex],
            ];
        }
    }

    //Checks diagonals
    if (
        gameState[0][0] === xo &&
        gameState[1][1] === xo &&
        gameState[2][2] === xo
    ) {
        isGameWon = true;
        winner = xo;
        winningCells = [cellNames[0][0], cellNames[1][1], cellNames[2][2]];
    }
    if (
        gameState[2][0] === xo &&
        gameState[1][1] === xo &&
        gameState[0][2] === xo
    ) {
        isGameWon = true;
        winner = xo;
        winningCells = [cellNames[2][0], cellNames[1][1], cellNames[0][2]];
    }

    if (isGameWon) {
        cells.forEach((cell) => {
            cell.style.backgroundColor = "#555";
        });
        winningCells.forEach((cellName) => {
            const winningCell = document.getElementById(cellName);
            winningCell.style.backgroundColor = "#00a000";
        });

        if (xo === "X") {
            xWins++;
            document.getElementById("x-score").innerText = xWins;
        }
        if (xo === "O") {
            oWins++;
            document.getElementById("o-score").innerText = oWins;
        }
        newGameButton.classList.remove("hidden");
    }

    if (emptySpaces === 0 && !isGameWon) {
        cells.forEach((cell) => {
            cell.style.backgroundColor = "#511";
        });
        newGameButton.classList.remove("hidden");
    }
}

function resetGame() {
    cells.forEach((cell) => {
        cell.classList.remove("selected");
        cell.style.backgroundColor = "#555";
        cell.innerText = "";
        cell.addEventListener("mouseout", resetCell);
        newGameButton.classList.add("hidden");
    });
    isXsTurnFirst ? (isXsTurnFirst = false) : (isXsTurnFirst = true);
    isXsTurn = isXsTurnFirst;
    emptySpaces = 9;
    isGameWon = false;
    gameState = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
}
