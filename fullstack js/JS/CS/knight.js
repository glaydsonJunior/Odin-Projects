class Gameboard {
    constructor() {
        this.squares = {}
        this.actual = null
    }

    knightMoves(cords){
        const future = [
            [2, -1],
            [2, 1],
            [-2, 1],
            [-2, -1],
            [1, 2],
            [-1, 2],
            [1, -2],
            [-1, -2]
        ]
        const moves = [[cords[0],[]]]
        let temp = moves[0][0].toString()
        let visited = new Set();
        visited.add(temp)

        while(moves.length > 0){
            const [act, cami] = moves.shift()
            const path = Array.isArray(cami) ? [...cami, act] : [act];
            visited.add(act.toString())
            

            if(this.arrEqual(act, cords[1]))return path

            for (const mv of future) {
                const novo = this.sumArrs(act, mv)
                if(novo != null && !visited.has(novo.toString())){
                    visited.add(novo.toString())
                    moves.push([novo, path])
                }
            }

        }
    }

    sumArrs(arr, sarr){
        const sum = [arr[0]+sarr[0], arr[1]+sarr[1]]
        if((sum[0] >= 0 && sum[0] < 8) && (sum[1] >= 0 && sum[1] < 8))return sum
        return null
    }

    arrEqual(arrA, arrB){
        return (arrA[0] == arrB[0]) && (arrA[1] == arrB[1])
    }
}

const gameboard = new Gameboard();
console.log(gameboard.knightMoves([[3,3],[4,3]]))