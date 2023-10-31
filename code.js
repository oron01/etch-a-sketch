let boardDefinition = 16

let squareContainer = document.querySelector('#squareContainer')
let setSquaresButton = document.querySelector('#setSquaresButton')

let addSquare = (i) => {
    i = document.createElement('div')
    i.className = 'square'
    squareContainer.appendChild(i)
}

let removeAllSquares = () => {
    let allSquares = document.querySelectorAll('.square')
    allSquares.forEach((square) => {squareContainer.removeChild(square)})
}

let setEtch = () => {
    removeAllSquares()
    for (let i = 0; i < boardDefinition; i++) {
        for (let i = 0; i < boardDefinition; i++) {
            addSquare(i)

        }

    }
}

setEtch()

let resetEtch = () => {
    boardDefinition = prompt("how many squares?")
    setEtch()
}

setSquaresButton.addEventListener('click',resetEtch)

