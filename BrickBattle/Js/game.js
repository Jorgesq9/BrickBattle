class GameScreens{
    constructor(){
    
    this.startingScreen = document.getElementById("Starting-Screen");
    this.gamingScreen = document.getElementById("Gaming-Screen");
    this.endScreen = document.getElementById("End-Screen")
    
    
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
    }

