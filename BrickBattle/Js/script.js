window.onload = function() {
    const startButton = document.getElementById("start-button")
    const gameScreens = new GameScreens;

startButton.addEventListener("click", function(){
    startGame();
})

function startGame() {
    gameScreens.start()
}





const canvas = document.getElementById("brickBattleCanvas")
const context = canvas.getContext('2d')

canvas.width = 900
canvas.height = 700

// Ball Variables

const radiusBall = 5;

// Ball position 

let x = canvas.width / 2
let y = canvas.height -40

//Ball speed

let speedX = -2
let speedY = -2


//paddle Variables

const padHeight = 10
const padWidth = 100

let paddleX = (canvas.width - padWidth)  / 2
let paddleY = canvas.height - padHeight - 30

let rightPressed = false;
let leftPressed = false;


// drawing a ball
function drawBall(){

    
    context.beginPath()
    context.arc(x, y, radiusBall, 0, Math.PI * 2)
    context.fillStyle = '#00FFFF'
    context.fill()
    context.closePath()
}

// drawing a paddle
function drawPaddle(){

    context.fillStyle = '#B40404'
    context.fillRect(paddleX, paddleY, padWidth, padHeight)
}

// cleaning the map to see thee ball and paddle movement
function cleanMap() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}



function drawBricks(){

}

function movementPadd() {
    if (rightPressed && paddleX < canvas.width - padWidth) {
        paddleX += 9
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 9
    }
}

function gameOver() {
    
    gameScreens.end()

    }

function movementBall() {
// collision with the width and height

    if (x + speedX > canvas.width - radiusBall || x + speedX < radiusBall ){ //collision with the width .
            speedX = -speedX
    }

    else if ( y + speedY < radiusBall){ //collision with the heigh

            speedY = -speedY
    }

    if(x > paddleX && x < paddleX + padWidth && y + speedY > paddleY){
        
        speedY = -speedY

    }
   else if (y + speedY > canvas.height - radiusBall ){
        
        gameOver();
        retyrGame()
       
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

initEvents();


function startGame() {
    gameScreens.start()
    drawMap();
}

function retyrGame() {
    const retryButton = document.getElementById("retry")
       retryButton.addEventListener("click", function(){
        gameScreens.retry()
       resetGame()
   })
   }

   function resetGame() {
    // Reset ball position
    x = canvas.width / 2;
    y = canvas.height - 40;

    // Reset paddle position
    paddleX = (canvas.width - padWidth) / 2;
    paddleY = canvas.height - padHeight - 30;

   // Reset the speed ball and direction
    speedX = -2;
    speedY = -2;

    cleanMap();
}
}