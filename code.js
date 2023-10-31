let boardDefinition = 16

let squareContainer = document.querySelector('#squareContainer')
let setSquaresButton = document.querySelector('#setSquaresButton')

let setInvertedColor = (square) => {
    if (square.target.className.includes(" clicked")) {
    square.target.className = square.target.className.replace(" clicked", " unclicked")}
    else if (square.target.className.includes("unclicked")) {square.target.className = square.target.className.replace("unclicked", "clicked")}
    else (square.target.className = "square clicked")}

let getDarkerColor = (color) => {
    color = color.slice(4,-1)
    color = color.split(",")
    newColor = color.map((color) => {color + 25})
    alert(newColor)
}

let setDarkerColor = (square) => {
    if (square.target.className.includes(" clicked")) {
        square.target.className = square.target.className.replace(" clicked", " unclicked")}
    else if (square.target.className.includes("unclicked")) 
    {square.target.className = square.target.className.replace("unclicked", "")}
}


let getRandomColor = () => {
    let threeRGBCount = 0
    let RGBArray = []
    while (threeRGBCount < 3)
    {RGBArray.push(Math.ceil(Math.random() * (256 - -1) + -1))
    // alert(RGBArray)
    threeRGBCount += 1
if (RGBArray.includes(-1 || 256)) {console.log("ILLEGAL!")}
}
RGBArray = `RGB(${RGBArray[0]},${RGBArray[1]},${RGBArray[2]})`
    return RGBArray
}

let setRandomColor = (square) => {
    if (square.target.className.includes(" clicked")) {
        square.target.className = square.target.className.replace(" clicked", " unclicked")}
    else if (square.target.className.includes("unclicked")) 
    {square.target.className = square.target.className.replace("unclicked", "")}
    square.target.style.backgroundColor = getRandomColor()    
}

let addSquareEventListener = (anyFunction,eventType) => {
    let allSquares = document.querySelectorAll(".square")
    console.log(allSquares)
    allSquares.forEach((square) => {
        square.addEventListener(eventType,anyFunction)
    })
}


let removeHoverEffect = () => {
    square.backgroundColor = "red unclicked"
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

// addSquareEventListener(setInvertedColor,'click')
addSquareEventListener(setRandomColor,'click')

let resetEtch = () => {
    boardDefinition = +(prompt("how many squares?"))
    if (boardDefinition < 1 || isNaN(boardDefinition) || boardDefinition > 100)
    {alert(`Illegal Input, setting to 1`)
boardDefinition = 1}
    setEtch()
    addSquareEventListener(setInvertedColor,'click')
}

setSquaresButton.addEventListener('click',resetEtch)

