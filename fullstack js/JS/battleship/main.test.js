const game = require("./game.js")

test("Place ship test", () => {
    const g = new game.Gameboard()
    expect(g.placeShip([4, 0], "horizontal")).toEqual([[4,0],[5,0],[6,0],[7,0],[8,0]])
    expect(g.receiveAttack([6,0])).toEqual(true)
    expect(g.receiveAttack(6,2)).toEqual(false)
    expect(g.ships[0].hits).toBe(1)
})