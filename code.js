let boardDefinition = 16

let squareContainer = document.querySelector('#squareContainer')
let setSquaresButton = document.querySelector('#setSquaresButton')

let causeHoverEffect = (square) => (
    square.className = "red hover"
) 

let removeHoverEffect = () => {
    square.backgroundColor = "red"
}

let addSquare = (square,container) => {
    square = document.createElement('div')
    square.className = 'square'
    container.appendChild(square)
}

let addMiniContainer = (container) => {
    container = document.createElement('div')
    container.className = 'miniContainer'
    squareContainer.appendChild(container)
    return(container)
}

let removeAllSquares = () => {
    let allMiniContainers = document.querySelectorAll('.miniContainer')
    allMiniContainers.forEach((miniContainer) => {squareContainer.removeChild(miniContainer)})
}

let setEtch = () => {
    removeAllSquares()
    for (let containerCount = 0; containerCount < boardDefinition; containerCount++) {
        let container = addMiniContainer(containerCount)
        for (let square = 0; square < boardDefinition; square++) {
            addSquare(square,container)

        }

    }
}

setEtch()

let resetEtch = () => {
    boardDefinition = +(prompt("how many squares?"))
    if (boardDefinition < 1 || isNaN(boardDefinition) || boardDefinition > 100)
    {alert(`Illegal Input, setting to 1`)
boardDefinition = 1}
    setEtch()
}

setSquaresButton.addEventListener('click',resetEtch)

