class GameScreens {
  constructor() {
    this.screens = {
      start: document.getElementById("Starting-Screen"),
      game: document.getElementById("Gaming-Screen"),
      end: document.getElementById("End-Screen"),
      win: document.getElementById("Win-Screen"),
      level2: document.getElementById("level2"),
    };
  }

  showScreen(screenName) {
    Object.values(this.screens).forEach(
      (screen) => (screen.style.display = "none")
    );
    this.screens[screenName].style.display = "block";
  }

  start() {
    this.showScreen("game");
  }

  end() {
    this.showScreen("end");
  }

  retry() {
    this.showScreen("game");
  }

  principalScreen() {
    this.showScreen("start");
  }

  win() {
    this.showScreen("win");
  }

  level2() {
    this.showScreen("level2");
  }

  playAgain() {
    this.showScreen("start");
  }
}

class Player {
  constructor() {
    this.name = "";
    this.score = 0;
  }

  askingName() {
    this.name = prompt("Write your name:") || "Player";
  }

  displayScore() {
    const scoreElement = document.getElementById("score");
    Object.assign(scoreElement.style, {});

    scoreElement.textContent = `Player: ${this.name} ㅤ Score: ${this.score}`;
  }
}
