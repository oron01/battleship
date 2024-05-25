let {createShip, createGameBoard} = require('./code')

test('create a ship',() => {
    expect(createShip(3).length).toBe(3)
    expect(createShip(3).isSunk).toBe(false)
    expect(createShip(3).timesHit).toBe(0)
})

test('sink a ship',()=> {
    let a = createShip(3)
    a.hit()
    a.hit()
    a.hit()
    expect(a.isSunk).toBe(true)
})

test(`receive attack`, () => {
    let a = createShip(3)
    let board = createGameBoard()
    board.placeShip("a",1,"vertical",a)
    board.receiveAttack("a",1)
    expect(a.timesHit).toBe(1)
})