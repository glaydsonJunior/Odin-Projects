const playerBlue = new Player("Player A");
const playerYellow = new Player("Player Y");
const infos = document.querySelector("#header-info")
const playerB = document.querySelector("#player-blue");
const playerY = document.querySelector("#player-yellow");
const resetBtn = document.querySelector(".pill-button")
let rotation = "horizontal";
let round = 1
let attackPhase = false

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

playerY.style = "display: none"

playerB.addEventListener("click", (a) => {
    if(!attackPhase){
        if (a.target.classList.contains("place-square") && playerBlue.gameboard.placer.length > 0) {
            const targetId = Number.parseInt(a.target.id);
            const squares = playerB.querySelectorAll(".place-square");
            const position = convertIdToArray(a.target.id);
            
            if (rotation == "horizontal" && playerBlue.gameboard.canPlace(position, rotation)) {
                for (let i = 0; i < playerBlue.gameboard.getActualSizeShip(); i++) {
                    squares[targetId + i].style.backgroundColor = "blue";
                }
                playerBlue.gameboard.placeShip(position, rotation);
            } else if (rotation == "vertical" && playerBlue.gameboard.canPlace(position, rotation)) {
                for (let i = 0; i < playerBlue.gameboard.getActualSizeShip(); i++) {
                    squares[targetId + (i * 10)].style.backgroundColor = "blue";
                }
                playerBlue.gameboard.placeShip(position, rotation);
            }
    
            if (playerBlue.gameboard.placer.length == 0) {
                resetPlayerBoard(playerB)
                swapPlayerVision(1)
            }
        }
    } else {
        if(a.target.classList.contains("place-square")){
            const targetId = Number.parseInt(a.target.id);
            const squares = playerB.querySelectorAll(".place-square");
            const position = convertIdToArray(a.target.id);
            const finded = playerBlue.gameboard.receiveAttack(position)
            updateSquareShot(finded,squares[targetId],"blue")
            if(!playerBlue.gameboard.lost()){
                alert("Amarelo win")
                resetBtn.style.display = "block"
            } else {
            if(!finded){
                swapPlayerVision(1)
                }
            }
        }
    }
    }
);

document.addEventListener("keydown", (k) => {
    if (k.key === 'r') {
        rotation = (rotation === "horizontal") ? "vertical" : "horizontal";
    }
});



playerY.addEventListener("click", (a) => {
    if(!attackPhase){
            if(a.target.classList.contains("place-square") && playerYellow.gameboard.placer.length > 0) {
            const targetId = Number.parseInt(a.target.id);
            const squares = playerY.querySelectorAll(".place-square");
            const position = convertIdToArray(a.target.id);
            
            if (rotation == "horizontal" && playerYellow.gameboard.canPlace(position, rotation)) {
                for (let i = 0; i < playerYellow.gameboard.getActualSizeShip(); i++) {
                    squares[targetId + i].style.backgroundColor = "gold";
                }
                playerYellow.gameboard.placeShip(position, rotation);
                
            } else if (rotation == "vertical" && playerYellow.gameboard.canPlace(position, rotation)) {
                for (let i = 0; i < playerYellow.gameboard.getActualSizeShip(); i++) {
                    squares[targetId + (i * 10)].style.backgroundColor = "gold";
                }
                playerYellow.gameboard.placeShip(position, rotation);
            }

            if (playerYellow.gameboard.placer.length == 0) {
                resetPlayerBoard(playerY)
                swapPlayerVision(0)
                attackPhase = true
            }
        }
    } else {
        if(a.target.classList.contains("place-square")){
            const targetId = Number.parseInt(a.target.id);
            const squares = playerY.querySelectorAll(".place-square");
            const position = convertIdToArray(a.target.id);
            const finded = playerYellow.gameboard.receiveAttack(position)
            updateSquareShot(finded,squares[targetId],"gold")
            if(!playerYellow.gameboard.lost()){
                alert("Azul win")
                resetBtn.style.display = "block"
            } else {
            if(!finded){
                swapPlayerVision(0)
            }
        }
        }
    }
});



function resetPlayerBoard(ref) {
    const squares = ref.querySelectorAll(".place-square");
    
    squares.forEach(square => {
        square.style.backgroundColor = "";
    });
}


function swapPlayerVision(s){
    if(s == 1){
        playerB.style = "display: none"
        playerY.style = "display: grid"
        return 1
    }
    playerY.style = "display: none"
    playerB.style = "display: grid"
    return 0
}

function updateSquareShot(find,ref, colour){
    if(find){
        ref.style.backgroundColor = colour
    } else{
        ref.style.backgroundColor = "#292945"
    }
}

function resetGame(){
    resetPlayerBoard(playerB)
    resetPlayerBoard(playerY)
    playerBlue.restart()
    playerYellow.restart()
    swapPlayerVision(0)
    resetBtn.style.display = "none"
    attackPhase = false
}