console.log("Chess game loaded.");

// Create an 8x8 board
const board = document.getElementById("board");

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        let square = document.createElement("div");
        square.classList.add("square");

        if ((row + col) % 2 === 0) {
            square.classList.add("light");
        } else {
            square.classList.add("dark");
        }

        board.appendChild(square);
    }
}
