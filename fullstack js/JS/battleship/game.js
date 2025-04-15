
class Ship{
    constructor(l, p, d){
        this.direction = d
        this.position = p
        this.len = l
        this.body = []
        this.hits = 0

        for (let i = 0; i < this.len; i++) {
            if(this.direction == 'horizontal'){
                this.body.push([this.position[0], this.position[1]+i])
            } else if(this.direction == 'vertical'){
                this.body.push([this.position[0]+i, this.position[1]])
            }
        }
    }
    hit(){
        if(this.len > this.hits){
            this.hits++
            return true
        }
        return false
    }
    isSunk(){
        return this.len == this.hits
    }
}
// [[x, y]]
class Gameboard{
    constructor(){
        this.placer = [5,4,3,3,2]
        this.ships = []
        this.misses = []
    }
    placeShip(pos, direction){
        if(this.canPlace(pos, direction)){
            this.ships.push(new Ship(this.getActualSizeShip(), pos, direction))
            console.log(this.ships[this.ships.length-1].body)
            this.placer.shift()
            return this.ships[this.ships.length-1].body
        }
        return null
    }
    
    canPlace(pos, direction){
        if(pos[0] < 10 && pos[1] < 10){
            if(direction == "horizontal" && this.getActualSizeShip()+pos[1] <= 9){
                return true
            } else if(direction == "vertical" && this.getActualSizeShip()+pos[0] <= 9){
                return true
            }
        }
        return false
    }

    receiveAttack(pos){
        
        for (let i = 0; i < this.ships.length; i++) {
            for (let j = 0; j < this.ships[i].body.length; j++) {
                const actualShip = this.ships[i]
                if(actualShip.body[j][0] == pos[0] && actualShip.body[j][1] == pos[1]){
                    return actualShip.hit()
                }
            }
        }
        this.misses.push(pos)
        return false
    }

    getActualSizeShip(){
        return this.placer[0];
    }


}

class Player{
    constructor(n){
        this.name = n
        this.gameboard = new Gameboard()
    }
}
