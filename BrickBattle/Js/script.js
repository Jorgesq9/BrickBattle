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

canvas.width = 500
canvas.height = 400

// Ball Variables

const radiusBall = 3;

// Ball position 

let x = canvas.width / 2
let y = canvas.height -30

//Ball speed

let speedX = -1
let speedY = -1



function drawBall(){

    
    context.beginPath()
    context.arc(x, y, radiusBall, 0, Math.PI * 2)
    context.fillStyle = '#00FFFF'
    context.fill()
    context.closePath()
}

function cleanMap() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}

function drawPaddle(){

}

function drawBricks(){

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



function drawMap() {
   
    cleanMap();
    drawBall()
    movementBall()
    window.requestAnimationFrame(drawMap);
}
drawMap();