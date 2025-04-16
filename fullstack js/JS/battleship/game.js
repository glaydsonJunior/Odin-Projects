class Ship {
    constructor(l, p, d) {
        this.direction = d;
        this.position = p;
        this.len = l;
        this.body = [];
        this.hits = 0;

        for (let i = 0; i < this.len; i++) {
            if (this.direction == 'horizontal') {
                this.body.push([this.position[1] + i, this.position[0]]);
            } else if (this.direction == 'vertical') {
                this.body.push([this.position[1], this.position[0] + i]);
            }
        }
    }
    hit() {
        if (this.len > this.hits) {
            this.hits++;
            return true;
        }
        return false;
    }
    isSunk() {
        return this.len == this.hits;
    }
}

// [[y, x]]
class Gameboard {
    constructor() {
        this.placer = [5, 4, 3, 3, 2];
        this.ships = [];
    }
    placeShip(pos, direction) {
        if (this.canPlace(pos, direction)) {
            const newShip = new Ship(this.getActualSizeShip(), pos, direction);
            this.ships.push(newShip);
            this.placer.shift();
            return newShip.body;
        }
        return null;
    }

    checkCollision(pos, direction) {
        const tempShip = this.generateBody(pos, direction);
        for (let boat of this.ships) {
            for (const bodyBoat of boat.body) {
                for (const tempBody of tempShip) {
                    if (tempBody[0] == bodyBoat[0] && tempBody[1] == bodyBoat[1]) return true; // Corrigido
                }
            }
        }
        return false;
    }

    receiveAttack(pos) {
        for (let i = 0; i < this.ships.length; i++) {
            for (let j = 0; j < this.ships[i].body.length; j++) {
                const actualShip = this.ships[i];
                if (actualShip.body[j][0] == pos[1] && actualShip.body[j][1] == pos[0]) {
                    actualShip.hit()
                    return true;
                }
            }
        }
        return false;
    }

    getActualSizeShip() {
        return this.placer[0];
    }

    canPlace(pos, direction) {

        if (pos[0] <= 9 && pos[1] <= 9) {
            if (direction === "horizontal" && pos[1] + this.getActualSizeShip() <= 10) {
                return !this.checkCollision(pos, direction);
            } else if (direction === "vertical" && pos[0] + this.getActualSizeShip() <= 10) {
                return !this.checkCollision(pos, direction);
            }
        }
        return false;
    }

    generateBody(pos, direction) {
        const r = [];
        for (let i = 0; i < this.getActualSizeShip(); i++) {
            if (direction == 'horizontal') {
                r.push([pos[1] + i, pos[0]]);
            } else if (direction == 'vertical') {
                r.push([pos[1], pos[0] + i]);
            }
        }
        return r;
    }

    lost(){
        for (const ship of this.ships) {
            if(ship.isSunk() == false)return true
        }
        return false
    }
}

class Player {
    constructor(n) {
        this.name = n;
        this.gameboard = new Gameboard();
    }
    restart(){
        this.gameboard = new Gameboard();
    }
}