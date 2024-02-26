window.onload = function() {
    const startButton = document.getElementById("start-button")
    const gameScreens = new GameScreens;

startButton.addEventListener("click", function(){
    startGame();
})

function startGame() {
    gameScreens.start()
}
}

const canvas = document.getElementById("brickBattleCanvas")
const context = canvas.getContext('2d')

canvas.width = 900
canvas.height = 700

// Ball Variables

const radiusBall = 5;

// Ball position 

let x = canvas.width / 2
let y = canvas.height -30

//Ball speed

let speedX = -3
let speedY = -3


//paddle Variables

const padHeight = 10
const padWidth = 100

let paddleX = (canvas.width - padWidth)  / 2
let paddleY = canvas.height - padHeight - 30

let rightPressed = false;
let leftPressed = false;

function drawBall(){

    
    context.beginPath()
    context.arc(x, y, radiusBall, 0, Math.PI * 2)
    context.fillStyle = '#00FFFF'
    context.fill()
    context.closePath()
}
function drawPaddle(){

    context.fillStyle = '#B40404'
    context.fillRect(paddleX, paddleY, padWidth, padHeight)
}


function cleanMap() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}



function drawBricks(){

}

function movementPadd() {
    if (rightPressed) {
        paddleX += 10
    }
    else if (leftPressed) {
        paddleX -= 10
    }
}

function movementBall() {
// collision with the width and height

    if (x + speedX > canvas.width - radiusBall || x + speedX < radiusBall ){ //collision with the width .
            speedX = -speedX
    }

    else if (y + speedY > canvas.height - radiusBall || y + speedY < radiusBall){

            speedY = -speedY
    }

    x += speedX
    y += speedY

}

function initEvents() {
    document.addEventListener('keydown', keyDownHandler)
    document.addEventListener('keyup', keyUpHandler)

    function keyDownHandler(event) {
        const {key} = event
        
        if (key === 'Left' || key === 'ArrowLeft') {
            leftPressed = true
        }
        else if (key === 'Right' || key === 'ArrowRight') {
            rightPressed = true
        }
    }
    function keyUpHandler(event) {

        const {key} = event
        if (key === 'Left' || key === 'ArrowLeft') {
            leftPressed = false
        }
        else if (key === 'Right' || key === 'ArrowRight') {
            rightPressed = false
        }
    }
}


function drawMap() {
   console.log(rightPressed, leftPressed)
    cleanMap()

    
    drawBall()
    drawPaddle()
    movementBall()
    movementPadd()
    
    window.requestAnimationFrame(drawMap);
}
drawMap();
initEvents();