const playerLabel = document.getElementById("score-label")
const playerName = prompt("Type your name(blank=player)")
playerLabel.textContent = (playerName.length === 0) ? "Player":playerName;
const btRock = document.getElementById("play-rock")
const btPaper = document.getElementById("play-paper")
const btScissor = document.getElementById("play-scissor")
const btPlay = document.getElementById("play-again")
const playerLabelScore = document.getElementById("player-score")
const cpuLabelScore = document.getElementById("cpu-score")


function buttonSwitch(n){
    if(n === 1){
        btRock.hidden = false;
        btPaper.hidden = false;
        btScissor.hidden = false;
        btPlay.hidden = true;
    } else {
        btRock.hidden = true;
        btPaper.hidden = true;
        btScissor.hidden = true;
        btPlay.hidden = false;
    }
}

function updateScore(score){
    playerLabelScore.textContent = score.player
    cpuLabelScore.textContent = score.computer
}
