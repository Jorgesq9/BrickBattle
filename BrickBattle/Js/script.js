window.onload = function() {
    const startButton = document.getElementById("start-button")
    const gameScreens = new GameScreens;
    const player = new Player;

startButton.addEventListener("click", function(){
    startGame();
})






const canvas = document.getElementById("brickBattleCanvas")
const context = canvas.getContext('2d')

canvas.width = 900
canvas.height = 700

// Ball Variables

const radiusBall = 5;
const ballSound = document.getElementById("ball-paddle")
// Ball position 

let x = canvas.width / 2
let y = canvas.height -40

//Ball speed

let speedX = 1
let speedY = 2






//paddle Variables

const padHeight = 10
const padWidth = 100

let paddleX = (canvas.width - padWidth)  / 2
let paddleY = canvas.height - padHeight - 30

let rightPressed = false;
let leftPressed = false;



//Bricks Variables
const brickHit = document.getElementById("brick-sound")

const rowOfBricks = 6
const columnsOfBricks = 10
const brickWidth = 70
const brickHeigth = 30
const brickMarginTop = 100
const brickPadding = 2
const brickMarginleft = 100
const bricks = []



const brickStatus = {unBroken: 1, broken: 0}


//Making the MATRIX, this are the data to use it later to draw the bricks.
for(let column = 0; column < columnsOfBricks; column++ ){

    bricks[column] = []

    for(let row = 0; row < rowOfBricks; row++){ 

        // calculating where to put the bricks .
        const brickX = column * (brickWidth + brickPadding) + brickMarginleft 
        const brickY = row * (brickHeigth + brickPadding) + brickMarginTop

        //Giving random colors to the bricks.

        const random = Math.floor(Math.random() * 9 )

        bricks[column][row] = {x: brickX, y: brickY, status: brickStatus.unBroken, color: random}
    }
}




// drawing a ball
function drawBall(){

    
    context.beginPath()
    context.arc(x, y, radiusBall, 0, Math.PI * 2)
    context.fillStyle = 'aqua'
    context.fill()
    context.closePath()
}

// drawing a paddle
function drawPaddle(){

    context.fillStyle = 'aqua'
    context.fillRect(paddleX, paddleY, padWidth, padHeight)
}

// cleaning the map to see thee ball and paddle movement
function cleanMap() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}



function drawBricks(){

    for(let column = 0; column < columnsOfBricks; column++ ){

        for(let row = 0; row < rowOfBricks; row++){

            const currentBrick = bricks[column][row]

            if(currentBrick.status === brickStatus.destroyed)
            continue
   
         context.fillStyle = 'purple'
         context.fillRect(currentBrick.x, currentBrick.y, brickWidth, brickHeigth)
         
        }
    }
}

function collisionBricks(){
    let allBricksDestroyed = true
    for(let column = 0; column < columnsOfBricks; column++ ){

        for(let row = 0; row < rowOfBricks; row++){

            const currentBrick = bricks[column][row]

            if(currentBrick.status === brickStatus.destroyed)
            continue

            if (x > currentBrick.x && x < currentBrick.x + brickWidth && y > currentBrick.y && y < currentBrick.y + brickHeigth){
                speedY = -speedY
                currentBrick.status = brickStatus.destroyed
                player.score += 100
                brickHit.currentTime = 0
                brickHit.volume = 0.1
                brickHit.play()
                console.log(player.score)
            }
        
            if ( currentBrick.status !== brickStatus.destroyed) {
                allBricksDestroyed = false
                
            }
            
        }
    }

    if (allBricksDestroyed) {
        gameWins()
        winSound.play()
        window.cancelAnimationFrame()
        resetGame()

    }
}

function movementPadd() {
    if (rightPressed && paddleX < canvas.width - padWidth) {
        paddleX += 6
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 6
    }
}

function gameOver() {
    
    gameOverSound.play()
    gameScreens.end()
    

    }

//Victory sound

const winSound = document.getElementById("winner")

function gameWins() {
    gameScreens.win()
    const playAgain = document.getElementById("Play-Again")
    playAgain.addEventListener("click", function(){
        gameScreens.playAgain()
        document.location.reload()
        resetGame()
})
}


//gameOver sound
const gameOverSound = document.getElementById("gameOver")


function movementBall() {
// collision with the width and height

    if (x + speedX > canvas.width - radiusBall || x + speedX < radiusBall ){ //collision with the width .
            speedX = -speedX
            ballSound.currentTime = 0
            ballSound.volume = 0.1
            ballSound.play()
    }

    else if ( y + speedY < radiusBall){ //collision with the heigh

            speedY = -speedY
            ballSound.currentTime = 0
            ballSound.volume = 0.1
            ballSound.play()
    }

    if(x > paddleX && x < paddleX + padWidth && y + speedY > paddleY){
        
        speedY = -speedY
        ballSound.currentTime = 0
        brickHit.volume = 0.1
        ballSound.play()

    }
   else if (y + speedY > canvas.height - radiusBall ){
        gameOverSound.currentTime = 0
        gameOver();
        retyrGame()
        window.cancelAnimationFrame()
       
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
    drawBricks()
    collisionBricks()
    player.displayScore()
    
    window.requestAnimationFrame(drawMap);
}

initEvents();

//buttonStart sounb
const startButtonSound = document.getElementById("startsound")

function startGame() {
    gameScreens.start()
    startButtonSound.volume = 0.1
    startButtonSound.play()
    player.askingName()
    drawMap();
}





function retyrGame() {
    const retryButton = document.getElementById("retry")
       retryButton.addEventListener("click", function(){
        gameScreens.retry()
        document.location.reload()
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