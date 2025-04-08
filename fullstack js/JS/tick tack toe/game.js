const squares = document.querySelectorAll(".square-play")
const nameOne = document.querySelector("#player1-name")
const pointsOne = document.querySelector("#player1-points")
const nameTwo = document.querySelector("#player2-name")
const pointsTwo = document.querySelector("#player2-points")
const buttons = document.querySelectorAll("#edit-button")

const pone = new Player("Player 1")
const ptwo = new Player("Player 2")

function Player(name){
    this.name = name
    this.points = 0
}

const gameObject = {
    tab: [['', '', ''], ['', '', ''], ['', '', '']],
    
    resetTab: function() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) this.tab[i][j] = '';
        }
        squares.forEach(square => {
            square.textContent = ''
        })
    },
    
    setMark: function(pos, symbol) {
        switch (pos) {
            case 'a':
                this.tab[0][0] = symbol;
                break;
            case 'b':
                this.tab[0][1] = symbol;
                break;
            case 'c':
                this.tab[0][2] = symbol;
                break;
            case 'd':
                this.tab[1][0] = symbol;
                break;
            case 'e':
                this.tab[1][1] = symbol;
                break;
            case 'f':
                this.tab[1][2] = symbol;
                break;
            case 'g':
                this.tab[2][0] = symbol;
                break;
            case 'h':
                this.tab[2][1] = symbol;
                break;
            case 'i':
                this.tab[2][2] = symbol;
                break;
            default:
                console.log('Posição inválida');
                return;
        }
    },
    
    show: function() {
        console.log((this.tab[0][0] != '') ? this.tab[0][0] : 'a', (this.tab[0][1] != '') ? this.tab[0][1] : 'b', (this.tab[0][2] != '') ? this.tab[0][2] : 'c');
        console.log((this.tab[1][0] != '') ? this.tab[1][0] : 'd', (this.tab[1][1] != '') ? this.tab[1][1] : 'e', (this.tab[1][2] != '') ? this.tab[1][2] : 'f');
        console.log((this.tab[2][0] != '') ? this.tab[2][0] : 'g', (this.tab[2][1] != '') ? this.tab[2][1] : 'h', (this.tab[2][2] != '') ? this.tab[2][2] : 'i');
    },
    
    win: function(player) { 
        if((this.tab[0][0] === player) && (this.tab[0][1] === player) && (this.tab[0][2] === player)) return true; 
        if((this.tab[1][0] === player) && (this.tab[1][1] === player) && (this.tab[1][2] === player)) return true; 
        if((this.tab[2][0] === player) && (this.tab[2][1] === player) && (this.tab[2][2] === player)) return true; 
        if((this.tab[0][0] === player) && (this.tab[1][0] === player) && (this.tab[2][0] === player)) return true; 
        if((this.tab[0][1] === player) && (this.tab[1][1] === player) && (this.tab[2][1] === player)) return true; 
        if((this.tab[0][2] === player) && (this.tab[1][2] === player) && (this.tab[2][2] === player)) return true; 
        if((this.tab[0][0] === player) && (this.tab[1][1] === player) && (this.tab[2][2] === player)) return true; 
        if((this.tab[0][2] === player) && (this.tab[1][1] === player) && (this.tab[2][0] === player)) return true; 
        return false; 
    },
    
    checkWinner: function() {
        if(this.win('x')) {
            alert(pone.name+" venceu!");
            pone.points++
            return 1;
        }
        if(this.win('o')) {
            alert(ptwo.name+" venceu!");
            ptwo.points++
            return 2;
        }
        return 0
    },
    
    actual: 'x'
};

squares.forEach(square => {
    square.addEventListener("click", () => {
        if(square.textContent == ''){
            gameObject.setMark(square.id, gameObject.actual)
            square.textContent = gameObject.actual
            gameObject.actual = (gameObject.actual == 'x') ? 'o':'x'
            switch(gameObject.checkWinner()){
                case 1:
                    pointsOne.textContent = pone.points
                    gameObject.resetTab()
                    break;
                case 2:
                    gameObject.resetTab()
                    pointsTwo.textContent = ptwo.points
            }
        } else {
            alert("Local já selecionado escolha outro")
        }
    })
});


buttons[0].addEventListener("click", () => {
    const n = prompt("Novo nome")
    pone.name = n
    nameOne.textContent = pone.name
})

buttons[1].addEventListener("click", () => {
    const n = prompt("Novo nome")
    ptwo.name = n
    nameTwo.textContent = ptwo.name
})