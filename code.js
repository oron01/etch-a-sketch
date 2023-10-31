let boardDefinition = 16

let squareContainer = document.querySelector('#squareContainer')
let setSquaresButton = document.querySelector('#setSquaresButton')

let invertButton = document.querySelector("#invertColorButton")
let randomButton = document.querySelector("#randomColorButton")
let darkenButton = document.querySelector("#darkenButton")

let currentFunctionSwitch = "invertColorButton"

let setInvertedColor = (square) => {
    if (square.target.style.backgroundColor == "" || square.target.style.backgroundColor == "rgb(255,255,255)") {
        square.target.style.backgroundColor = "rgb(0,0,0)" }
    else {
        square.target.style.backgroundColor = ""}
  }

let getDarkerColor = (color) => {
    color = color.slice(4,-1)
    color = color.split(",")
    let newColor = color.map((a) => +a - 25)
    newColor = `RGB(${newColor[0]},${newColor[1]},${newColor[2]})`
    return newColor
}

let switchGameFunction = (square) => {
    let functionSwitch
    if (square == null) { functionSwitch = currentFunctionSwitch}
    else {functionSwitch = square.target.id
    // alert(currentFunctionSwitch)
    }
    currentFunctionSwitch = functionSwitch
    switch (functionSwitch) {
        case "invertColorButton":
            addSquareEventListener(setInvertedColor,'click',"add")
            addSquareEventListener(setRandomColor,'click',"remove")
            addSquareEventListener(setDarkerColor,'click',"remove")
            break;
        case "randomColorButton":
            addSquareEventListener(setInvertedColor,'click',"remove")
            addSquareEventListener(setRandomColor,'click',"add")
            addSquareEventListener(setDarkerColor,'click',"remove")
            break;
        case "darkenButton":
            addSquareEventListener(setInvertedColor,'click',"remove")
            addSquareEventListener(setRandomColor,'click',"remove")
            addSquareEventListener(setDarkerColor,'click',"add")
            break;
    } 
}

let setDarkerColor = (square) => {
square.target.style.backgroundColor = getDarkerColor(square.target.style.backgroundColor)
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

let addSquareEventListener = (anyFunction,eventType,addOrRemove) => {
    let allSquares = document.querySelectorAll(".square")
    console.log(allSquares)
    if (addOrRemove == "add") {
    allSquares.forEach((square) => {
        square.addEventListener(eventType,anyFunction)
    })}
    else if (addOrRemove == "remove") {
        allSquares.forEach((square) => {
            square.removeEventListener(eventType,anyFunction)
        })
    }
    
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

addSquareEventListener(setInvertedColor,'click',"add")
// addSquareEventListener(setRandomColor,'click')

let resetEtch = () => {
    boardDefinition = +(prompt("how many squares?"))
    if (boardDefinition < 1 || isNaN(boardDefinition) || boardDefinition > 100)
    {alert(`Illegal Input, setting to 1`)
boardDefinition = 1}
    setEtch()
    switchGameFunction()
    // addSquareEventListener(setInvertedColor,'click')
}

setSquaresButton.addEventListener('click',resetEtch)

invertButton.addEventListener('click',switchGameFunction)
randomButton.addEventListener('click',switchGameFunction)
darkenButton.addEventListener('click',switchGameFunction)

//consider adding a spray mode where you can just hold down or mouse enter