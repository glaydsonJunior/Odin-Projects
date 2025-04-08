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

function play(score, choice){
    if(score.counter > 0){
        score.counter -= 1;
        const cpu = getComputerChoice()
        const result = compare(choice, cpu)
        switch(result){
            case 1:
                console.log(`Player Wins`)
                score.player = score.player+1;
                break;
            case 0:
                console.log(`Draw!`)
                break;
            case -1:
                console.log(`Computer Wins`)
                score.computer = score.computer+1
                break;
        }
    }
}

let scores = {
    counter: 1,
    player: 0,
    computer:  0
}


btRock.addEventListener("click", ()=>{ 
    play(scores, 3)  
    if(scores.counter <= 0)buttonSwitch(0)
    updateScore(scores)
})
btPaper.addEventListener("click", ()=>{ 
    play(scores, 1) 
    if(scores.counter <= 0)buttonSwitch(0)
    updateScore(scores)
})
btScissor.addEventListener("click", ()=>{ 
    play(scores, 2)
    if(scores.counter <= 0)buttonSwitch(0)
    updateScore(scores)
})


function playGame(score){
    const n = Number.parseInt(roundSelect.value)
    if(n > 0){
        buttonSwitch(1)
        score.counter = n;
        score.player = 0;
        score.computer = 0;
        return scores
    }
    alert("O numero de rounds deve ser maior ou igual a 1")
}
