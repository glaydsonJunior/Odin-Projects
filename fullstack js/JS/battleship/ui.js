const playerBlue = new Player("Player A");

const playerB = document.querySelector("#player-blue");
const playerY = document.querySelector("#player-yellow");
let rotation = 0;

function createSquare(id) {
    const sqr = document.createElement("div");
    sqr.classList.add("place-square");
    sqr.id = id;
    return sqr;
}

for (let c = 0; c < 100; c++) {
    playerB.appendChild(createSquare(c));
}

for (let c = 0; c < 100; c++) {
    playerY.appendChild(createSquare(c));
}

function convertIdToArray(id) {
    if (id.length < 2) {
        return [0, Number.parseInt(id)];
    }
    return [Number.parseInt(id[0]), Number.parseInt(id[1])];
}

playerB.addEventListener("click", (a) => {
    if (a.target.classList.contains("place-square")) {
        const targetId = Number.parseInt(a.target.id);
        const squares = playerB.querySelectorAll(".place-square");
        if (rotation === 0 && playerBlue.gameboard.canPlace(convertIdToArray(a.target.id), "vertical")) {
            for (let i = 0; i < playerBlue.gameboard.getActualSizeShip(); i++) {
                squares[targetId + (i * 10)].style.backgroundColor = "blue";
            }
            playerBlue.gameboard.placeShip(convertIdToArray(a.target.id), "vertical");
        } else if(rotation === 1 && playerBlue.gameboard.canPlace(convertIdToArray(a.target.id), "horizontal")){
            for (let i = 0; i < playerBlue.gameboard.getActualSizeShip(); i++) {
                squares[targetId + i].style.backgroundColor = "blue";
            }
            playerBlue.gameboard.placeShip(convertIdToArray(a.target.id), "horizontal");
        }
    }
});

document.addEventListener("keydown", (k) => {
    if (k.key === 'r') {
        rotation = (rotation === 0) ? 1 : 0;
    }
});