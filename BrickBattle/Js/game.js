class GameScreens{
    constructor(){

    this.startingScreen = document.getElementById("Starting-Screen");
    this.gamingScreen = document.getElementById("Gaming-Screen");
    this.endScreen = document.getElementById("End-Screen")
    this.gameIsOver = false;
    
}

    start() {
        this.gamingScreen.style.width = `${this.width}px`
        this.gamingScreen.style.width = `${this.height}px`
        this.startingScreen.style.display = 'none';
        this.gamingScreen.style.display = 'block'
    }

}