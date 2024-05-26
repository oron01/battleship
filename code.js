let createShip = (length) => {
    return {
        length: length,
        timesHit: 0,
        isSunk: false,
        hit: function() {
            this.timesHit+=1
            console.log("hit logged")
        isSunk = () => {
            console.log(this.timesHit + " " + this.length)
            if (this.timesHit >= this.length) {
                return true
            }
        }
        makeSunk = () => {
            this.isSunk = true
        }
        if (isSunk()) {
            makeSunk()}
    }
    }
    }

let createGameBoard = () => {
    let columns = "abcdefghij"
    let rows = 10
    let gameBoard = {}
    let createBoard = () => {
        gameBoard.misses = []
        gameBoard.bingo = false
        gameBoard.ships = []
        for (let i = 0; i < columns.length;i++) {
            let col = columns[i]
            for (let i2 = 1; i2 <= rows; i2++) {
                gameBoard[`${col}${i2}`] = {hit:null}
            }
        }
    }
    createBoard()
    return {...gameBoard,
    placeShip: function(startX,startY,orientation,ship) {
        let getShipCells = (length,orientation) => {
            let cellsArray = []
            let isVertical = (orientation) => {
                if (orientation = "vertical") {return true}
                else {return false}
            }
            let generateVerticalArray = (length) => {
                console.log("generating vert")
                for (let i = 0; i<length; i++) {
                    cellsArray.push(`${startX}${startY+i}`)
                    console.log(cellsArray)
                }
            }
            let generateHorizontalArray = () => {
                    let alphabet = "abcdefghij"
                    let findIndex = () => {
                    for (let i = 0; i< 10; i++) {
                        if (startX == alphabet[i]) {
                            firstLetterIndex = i
                            console.log("index found" + firstLetterIndex)
                        }
                    }}
                    let firstLetterIndex = findIndex()

                let generateArray = () => {
                for (let i = 0; i<length; i++) {
                    cellsArray.push(`${alphabet[firstLetterIndex+i]}${startY+i}`)
                }
            }
            generateArray()
            }
            let generateArray = () => {
            if (isVertical(orientation)) {generateVerticalArray(length)}
            else {generateHorizontalArray()}}

            generateArray()
        return cellsArray
        }
        let shipCells = getShipCells(ship.length,orientation)
        let placeCellsOnBoard =() => {
            for (let i = 0; i< shipCells.length;i++ ) {
                console.log(this)
                this[shipCells[i]] = {hit:false,
                Occupier:ship}
            }
        }
        placeCellsOnBoard()
        let addShipToBoardArray = () => {
            this.ships.push(ship)
        }
        addShipToBoardArray()
        return shipCells
    },
    receiveAttack: function(xPos,yPos) {
        let hitLanded = () => {
            let landStatus = false
            let target = this[`${xPos}${yPos}`]
            console.log(target)
            // let ship = this[`${xPos}${yPos}`].Occupier 
            if (!target.hit && target.Occupier) {
                landStatus = true
            }
            return landStatus
        }
        let hitStatus = hitLanded()

        let checkIfLost = (shipsArray) => {
            let winStatus = true
            for (let i = 0; i < shipsArray.length ; i++) {
                if (shipsArray[i].isSunk == false) winStatus = false
            }
            return winStatus
        }
        let generateLoss = () => {
            console.log("LOST BIATCH")
            this.bingo = true
                }

        let landHit = () => {
            console.log("obama")
        this[`${xPos}${yPos}`].Occupier.hit()
        this[`${xPos}${yPos}`].hit = true
    console.log(this)
    console.log(`hit landed at ${xPos},${yPos} of ship ${this[`${xPos}${yPos}`].Occupier}`)
    if (checkIfLost(this.ships)) {
        generateLoss()}
}
    let missHit = () => {
        this.misses.push({position:`${xPos}${yPos}`})
    }
    if (hitStatus) landHit()
    else {missHit()}
}
    }
}

function createPlayer(playerType) {
    let playerGameboard = createGameBoard()
    return {
        playerType,
        playerGameboard,
    }
}

module.exports = {createShip, createGameBoard, createPlayer}