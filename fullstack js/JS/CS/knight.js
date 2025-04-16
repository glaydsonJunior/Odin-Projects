class Gameboard {
    constructor() {
        this.squares = {}
        this.actual = null
    }

    futureMove(pos){
        const r = []
        if((pos[0]+2 >= 0 && pos[1]+1 >= 0) && (pos[0]+2 <= 7 && pos[1]+1 <= 7))r.push([pos[0]+2, pos[1]+1])
        if((pos[0]+2 >= 0 && pos[1]-1 >= 0) && (pos[0]+2 <= 7 && pos[1]-1 <= 7))r.push([pos[0]+2, pos[1]-1])
        if((pos[0]-2 >= 0 && pos[1]+1 >= 0) && (pos[0]-2 <= 7 && pos[1]+1 <= 7))r.push([pos[0]-2, pos[1]+1])
        if((pos[0]-2 >= 0 && pos[1]-1 >= 0) && (pos[0]-2 <= 7 && pos[1]-1 <= 7))r.push([pos[0]-2, pos[1]-1])
        if((pos[0]+1 >= 0 && pos[1]+2 >= 0) && (pos[0]+1 <= 7 && pos[1]+2 <= 7))r.push([pos[0]+1, pos[1]+2])
        if((pos[0]-1 >= 0 && pos[1]+2 >= 0) && (pos[0]-1 <= 7 && pos[1]+2 <= 7))r.push([pos[0]-1, pos[1]+2])
        if((pos[0]+1 >= 0 && pos[1]-2 >= 0) && (pos[0]+1 <= 7 && pos[1]-2 <= 7))r.push([pos[0]+1, pos[1]-2])
        if((pos[0]-1 >= 0 && pos[1]-2 >= 0) && (pos[0]-1 <= 7 && pos[1]-2 <= 7))r.push([pos[0]-1, pos[1]-2])
        
        return r   
    }


    knightMoves(cords){
        let moves = this.futureMove(cords[0])
        let aprox = cords[1][0]-cords[1][1]
        for (let i = 0; i < moves.length; i++) {
            if(moves[i][0]-moves[i][1]<aprox){
                aprox = moves[i][0]-moves[i][1]
                console.log(moves[i])
                const temp = this.futureMove(moves[i])
                for (let j = 0; j < moves[i].length; j++) {
                    console.log(temp[i])
                }
            }
        }
        return false
    }

    displayBoard() {
        console.log(this.squares.map(row => row.map(coord => `(${coord[0]}, ${coord[1]})`).join(' | ')).join('\n'));
    }
}

const gameboard = new Gameboard();
console.log(gameboard.knightMoves([[3,3],[4,3]]))