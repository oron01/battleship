// let {createGameBoard,createShip,createPlayer} = require("./code")

let char1SRC = "./char1643.png" 

let generateUI = () => {

let body = document.querySelector("body")
let mainContainer = document.createElement("div")
mainContainer.classList = "mainContainer"
body.appendChild(mainContainer)

let gameboard1Container = document.createElement("div")
gameboard1Container.classList = "gameboardContainer gameboard1Container"

let gameboard2Container = document.createElement("div")
gameboard2Container.classList = "gameboardContainer gameboard2Container"

let controlBarContainer = document.createElement("div")
controlBarContainer.classList = "controlBarContainer"

mainContainer.appendChild(gameboard1Container)
mainContainer.appendChild(gameboard2Container)
mainContainer.appendChild(controlBarContainer)

let generateGameboard = () => {
    let gameboardDiv = document.createElement("div")
    gameboardDiv.classList = `gameboard`
    let cellsArray = []
    let generateCellsGrid = () => {
        let alphabet = "abcdefghij"
        for (let verticalIter = 0; verticalIter < alphabet.length;verticalIter++) {
            for (let hoirzontalIter = 0; hoirzontalIter <alphabet.length ; hoirzontalIter++) {
                let cell = document.createElement("div")
                cell.classList = `${alphabet[verticalIter]}${hoirzontalIter + 1} cell`
                
                let cellToolTip = document.createElement("p")
                cellToolTip.textContent = `${alphabet[verticalIter]}${hoirzontalIter + 1}`
                cellToolTip.classList = "cellToolTip"
                cell.appendChild(cellToolTip)
                console.log("pushed")

                cellsArray.push(cell)

            }
        }
    }
    console.log(cellsArray)
    let appendCells = () => {
        for (let i = 0; i < cellsArray.length; i++) {
            gameboardDiv.appendChild(cellsArray[i])
        }
    }
    generateCellsGrid()
    appendCells()
    return gameboardDiv
}

let gameBoard1 = generateGameboard()
gameboard1Container.appendChild(gameBoard1)
let gameboard2 = generateGameboard()
gameboard2Container.appendChild(gameboard2)

let generateControlPanelandStats = () => {
    let p1Bar = document.createElement("div")
    p1Bar.classList = "p1Bar controlBar"
    let p2Bar = document.createElement("div")
    p2Bar.classList = "p2Bar controlBar"

        controlBarContainer.appendChild(p1Bar)
        controlBarContainer.appendChild(p2Bar)
    let generatePlayerControlBar = (containerDiv,player) => {
        let statsDiv = document.createElement("div")
        statsDiv.classList = "statsDiv"
        containerDiv.appendChild(statsDiv)
        let buttonsDiv = document.createElement("div")
        buttonsDiv.classList = "buttonsDiv"
        containerDiv.appendChild(buttonsDiv)

        let profileIcon = document.createElement("div")
        let profileIconIMG = document.createElement("img")
        profileIconIMG.src = char1SRC
        profileIconIMG.classList = "profileIconImg"
        profileIcon.classList = "profileIconDiv"
        let profileText = document.createElement("p")
        profileText.textContent = "playerX"
        console.log(`url(${char1SRC})`)
        statsDiv.appendChild(profileIcon)
        profileIcon.appendChild(profileIconIMG)
        profileIcon.appendChild(profileText)
        let hitsH1 = document.createElement("h1")
        hitsH1.textContent = `Hits:`
        statsDiv.appendChild(hitsH1)
        let status = document.createElement("h1")
        status.textContent = "Status:"
        statsDiv.appendChild(status)

        let strikeButton = document.createElement("div")
        strikeButton.classList = "strikeButton button"
        strikeButton.textContent = "Strike"
        buttonsDiv.appendChild(strikeButton)
        let tauntButton = document.createElement("div")
        tauntButton.classList = "tauntButton button"
        tauntButton.textContent = "Taunt"
        buttonsDiv.appendChild(tauntButton)
        let forfeitButton = document.createElement("div")
        forfeitButton.classList = "forfeitButton button"
        forfeitButton.textContent = "Forfeit"
        buttonsDiv.appendChild(forfeitButton)
    }

    generatePlayerControlBar(p1Bar)
    generatePlayerControlBar(p2Bar)
}
generateControlPanelandStats()
} 

let generateGame = () => {
    let player1 = createPlayer()
    let player2 = createPlayer()

}

generateUI()