let boxes = document.querySelectorAll(".box");
let turnO = true;   //p1 -> turnX & p2 -> turnO.

let game = ["", "", "", "", "", "", "", "", ""];
let msg = document.querySelector('#msg');
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {

        if (game[index] !== "") return;
        if (turnO) {
            box.innerText = "O";   //playerO
            game[index] = "O";
            turnO = false;
        } else {
            box.innerText = "X";    //playerX
            game[index] = "X";
            turnO = true;
        }
        box.disabled = true;

        let winner = checkWinner();
        if (winner) {
            flash();
            msg.innerText = ("Team" + winner + " won 🎉!");
            disableBoxes();
        }
        if (!game.includes("") && !winner) {
            flash();
            msg.innerText = ("Match Draw 🤝!");
            disableBoxes();
        }

    });
})

function checkWinner() {
    for (let pattern of winPatterns) {
        let a = pattern[0]; //Destructuring let [a, b, c] = pattern;
        let b = pattern[1];
        let c = pattern[2];

        if (game[a] !== "" && game[a] === game[b] && game[a] === game[c]) {
            return game[a];   // "X" ya "O"
        }
    }
    return false;
}

function disableBoxes() {
    boxes.forEach(box => {
        box.disabled = true;
    });
}

let resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click',resetGame);

function resetGame() {
    game = ["", "", "", "", "", "", "", "", ""];
    turnO = true;

    flash();
    msg.innerText = "";
    boxes.forEach(box => {
        box.innerText = ""; //clear box UI
        box.disabled = false;
    })
}

let body = document.querySelector('body');
function flash () {
    body.classList.add("flash");
    setTimeout(() => {
        body.classList.remove("flash");
    }, 500);
}

