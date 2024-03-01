<h1 align="center"> Brick-Battle by Jorge Esquiva </h1>

<h2 align="center"> Here I will post the steps I did to to my code.</h2>


<h3 align="center"> HTML </h3>

<p align="center">   //Day1
1--> I made an html with the title of the page <title>BrickBattle</title.
2--> I made 3 div to separate the content of the 3 game screens, Start, Game and End of game.
3--> Link the HTML with CSS and with the two JS Files

//Day2

1--> Change the End-Game div because it was not capturing what should be shown on the screen, only the title.</p>

<h3 align="center"> CSS </h3>
<p align="center">
1--> Starting-Screen which is where our start of the game will go with Title, logo and the button to start playing.

2--> Gaming Screen which is where we are going to play the game and the canvas which is going to be our game map.

3 --> End-Screen which is the Game Over and retry screen if you want to play again. </p>

<h3 align="center"> JS </h3>
<p align="center">
Day1
game.js --> It is our file that through classes will control the transition of our screens, at the moment I only have the transition from the home screen to the gaming screen with the canvas.

Day2
game. js --> Today I have made the GameScreens class have three screens, the initial one that transitions to the game screen through a button and through the logic of losing transitions to the Game Over screen, also with a button that when pressed I return to the game screen.

Day3

game.js 1 -> The next step will be to create the class so that the user is asked for its name and its name and the player's score can be seen.

2--> within player I have made two askingName() methods that ask the user for the name with a prompt.

3--> DisplayScore() in this method we take the html score id that I added before and using textContent enter the player + this.name which will be the name that I entered and socre + this.score.








Day1
script.js --> this is where our game logic will go and the canvas will be drawn with the game map, the ball, the bricks and the shovel to play.

1-> Function drawMap with window.requestAnimationFrame(drawMap); and by calling drawMap when the function finishes, we are creating a loop of frames to give the sensation of animating the frames that will be constantly called to add frames with drawMap().

2 -> Let's start drawing the ball. For this, I have created a variable with the radius and other variables with the position of the ball and the speed it will carry.

--> drawBall() function --> context.beginPath() to start drawing the ball
--> context.arc(x, y, radiusBall, 0, Math.PI * 2) to make the circle of the ball.
--> context.fillStyle = '#00FFFF'context.fill() to add color and fill the ball
--> context.closePath() closes the current path so that there are no errors in the future.

3 -> cleanMap() --> what this function does is delete the frames through which the ball passes.


4 --> movementBall() --> this function makes the ball move in the x and y direction according to the speed that we have predefined with the speedX and speedY variables. I have also added conditionals so that the ball bounces when it reaches the limits on the sides and above and that the game is lost if it hits the bottom. When hitting the bottom.

5--> drawPaddle() --> here using fillRect() and the constants that I created for the position and composure of the paddle we have drawn the paddle and I have associated directions with the direction arrows with initEvents() in which I had It had to reflect when it was pressed but also when it was released because if not, it would never stop going towards the pressed side.

6--> movementPadd() --> Here I delimit the paddle so that it does not leave the play area with collisions and also the speed (sensitivity) at which it will move to the sides

Day2
script.js

1 --> The first thing I did today is give the collision with the ball and the paddle, for this I had to make a conditional within the movementBall() function in which if the ball is in the same coordinates as the paddle (including the px width of this), the ball bounces and if not then the game goes to the Game Over screen.

2--> Also today I have managed to coordinate when I change from the first screen to the game screen, that the game does not start running before being on that screen with the startGame function, for this I changed it at the end of the code and added call to the drawMap() function inside startGame() so that it starts only when it is activated.

3--> When I lost and went to the retry screen I had a lot of problems being able to return to the game without it having already started so I made the retryGame() function that activates the retry button to go to the retry screen game but I also call the resetGame() function to reset the game to its initial form.

4 --> When it came to making the Bricks, it was quite difficult but I have already drawn them, all that remains is to do the collision, to draw them I first made the variables for the columns and rows, and how I wanted the width and height of each one to be. To draw them I made two fors to create the columns and rows with the bricks </p>


