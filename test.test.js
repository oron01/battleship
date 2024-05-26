let {createShip, createGameBoard} = require('./code')

test('create a ship',() => {
    expect(createShip(3).length).toBe(3)
    expect(createShip(3).isSunk).toBe(false)
    expect(createShip(3).timesHit).toBe(0)
})

test('sink a ship through inner methods',()=> {
    let a = createShip(3)
    a.hit()
    a.hit()
    a.hit()
    expect(a.isSunk).toBe(true)
})

test('receive attack', () => {
    let a = createShip(3)
    let board = createGameBoard()
    board.placeShip("a",1,"vertical",a)
    board.receiveAttack("a",1)
    expect(a.timesHit).toBe(1)
})

test('sink a  ship via attacks', () => {
    let a = createShip(3)
    let board = createGameBoard()
    board.placeShip("a",1,"vertical",a)
    board.receiveAttack("a",1)
    board.receiveAttack("a",2)
    board.receiveAttack("a",3)
    expect(a.isSunk).toBe(true)
})

test('log a missed attack', () => {
    let a = createShip(3)
    let board = createGameBoard()
    board.placeShip("a",1,"vertical",a)
    board.receiveAttack("b",1)
    expect(board.misses[0].position).toBe("b1")
})

test('gameboards report when all their ships have been sunk', () => {
    let a = createShip(1)
    let b = createShip(1)
    let board = createGameBoard()
    board.placeShip("a",1,"vertical",a)
    board.placeShip("b",1,"vertical",b)
    expect(board.bingo).toBe(false)
    board.receiveAttack("a",1)
    board.receiveAttack("b",1)
    expect(board.bingo).toBe(true)
})

