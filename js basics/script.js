function getHumanChoice(){
    const choice = prompt("1=paper, 2=scissor, 3=rock")
    return choice
}

function getComputerChoice(){
    const choice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return choice
}

// 1: win, 0: draw, -1: defeat
function compare(player, cpu){
    switch(player){
        case 1: // paper
            if(cpu == 1)return -1
            if(cpu == 2)return 0
            if(cpu == 3)return 1
            break;
        case 2: // scissor
            if(cpu == 1)return 1
            if(cpu == 2)return 0
            if(cpu == 3)return -1
            break;
        case 3: // rock
            if(cpu == 1)return -1
            if(cpu == 2)return 1
            if(cpu == 3)return 0
            break;
        default:
            return "error";
    }
}

function convert(n){
    if(n == 1) return "Paper"
    if(n == 2) return "Scissor"
    if(n == 3) return "Rock"
}

function playRound(scores){
    const human = getHumanChoice()
    const cpu = getComputerChoice()
    const result = compare(Number.parseInt(human), cpu)
    console.log(result)
    switch(result){
        case 1:
            console.log(`Player: ${convert(human)} x Computer: ${convert(cpu)} - Player Wins`)
            scores.player = scores.player+1;
            break;
        case 0:
            console.log(`Player: ${convert(human)} x Computer: ${convert(cpu)} - Draw!`)
            break;
        case -1:
            console.log(`Player: ${convert(human)} x Computer: ${convert(cpu)} - Computer Wins`)
            scores.computer = scores.computer+1
            break;
    }
    return scores
}

function playGame(){
    
let scores = {
    player: 0,
    computer:  0
}
    for (let i = 0; i < 5; i++) {
        playRound(scores)
    }
    return scores
}