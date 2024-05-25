let createShip = (length) => {
    return {
        length: length,
        timesHit: 0,
        isSunk: false,
        hit: function() {
            this.timesHit+=1
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
        for (let i = 0; i < columns.length;i++) {
            let col = columns[i]
            for (let i2 = 1; i2 <= rows; i2++) {
                gameBoard[`${col}${i2}`] = null
            }
        }
    }
    createBoard()
    return {...gameBoard,
    placeShip: function(startX,startY,orientation,ship) {
        let getShipCells = (size,orientation) => {
            let cellsArray = []
            let isVertical = (orientation) => {
                if (orientation = "vertical") {return true}
                else {return false}
            }
            let generateVerticalArray = (size) => {
                console.log("generating vert")
                for (let i = 0; i<size; i++) {
                    cellsArray.push(`${startY}${startX+i}`)
                    console,log(cellsArray)
                }
            }
            let generateHorizontalArray = () => {
                    let alphabet = "abcdefghij"
                    let findIndex = () => {
                    for (let i = 0; i< 10; i++) {
                        if (startY == alphabet[i]) {
                            firstLetterIndex = i
                            console.log("index found" + firstLetterIndex)
                        }
                    }}
                    let firstLetterIndex = findIndex()

                let generateArray = () => {
                for (let i = 0; i<size; i++) {
                    cellsArray.push(`${alphabet[firstLetterIndex+i]}${startX+i}`)
                }
            }
            generateArray()
            }
            let generateArray = () => {
            if (isVertical(orientation)) {generateVerticalArray(size)}
            else {generateHorizontalArray()}}

            generateArray()
        return cellsArray
        }
        let shipCells = getShipCells(ship.size,orientation)
        function placeCellsOnBoard () {
            for (let i = 0; i< shipCells.length;i++ ) {
                this.gameBoard[shipCells[i]] = {Hit:false,
                Occupier:ship}
            }
        }
        placeCellsOnBoard()
        return shipCells
    },
    receiveAttack: function(xPos,yPos) {
        let hitLanded = () => {
            let landStatus = false
            if (this.gameBoard[`${xPos}${yPos}`].hit == false) {
                landStatus = true
            }
            return landStatus
        }
        let hitStatus = hitLanded()
        if (hitStatus) {this.gameBoard[`${xPos}${yPos}`].ship.hit()
        this.gameBoard[`${xPos}${yPos}`].hit = true}
    console.log(`hit landed at ${xPos},${yPos} of ship ${this.gameBoard[`${xPos}${yPos}`].ship}`)
    }
    }
}

module.exports = {createShip, createGameBoard}