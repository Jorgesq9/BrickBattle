class GameScreens{
    constructor(){
    
    this.startingScreen = document.getElementById("Starting-Screen");
    this.gamingScreen = document.getElementById("Gaming-Screen");
    this.endScreen = document.getElementById("End-Screen")
    this.winScreen = document.getElementById("Win-Screen")
    this.level2 = document.getElementById("level2")
    
}

    start() {
    
        this.startingScreen.style.display = 'none';
        this.gamingScreen.style.display = 'block'
    }

    end() {
        this.gamingScreen.style.display = 'none'
        this.endScreen.style.display = 'block'
        
    }
    retry() {
        this.endScreen.style.display ='none'
        this.gamingScreen.style.display = 'block'
    }
    principalScreen(){
        this.endScreen.style.display ='none'
        this.startingScreen.style.display = 'block'
    }

    win() {
        this.gamingScreen.style.display = 'none'
        this.winScreen.style.display = 'block'

        }
    level2(){
        this.winScreen.style.display = 'none'
        this.level2.style.display = 'block'
    }

    playAgain(){
        this.winScreen.style.display = 'none'
        this.startingScreen.style.display = 'block'
    }
    } 

class Player {
    constructor(){
        this.name = ""
        this.score = 0
    }

    askingName() {
        this.name = prompt("Write your name:")
    }

    displayScore(){
        const score = document.getElementById("score")

        score.style.color = 'aqua'
        score.style.fontFamily = 'Arial'
        score.style.fontSize = '30px'
        score.style.textAlign = 'center'
        
        score.textContent = `Player: ${this.name} ㅤ Score: ${this.score} `
    
    }
}