# 🎮 Brick-Battle by Jorge Esquiva

Welcome to **Brick-Battle**, a retro arcade-style brick-breaking game! 🕹️

## 📌 About the Project
Brick-Battle is a simple but exciting game where players control a paddle to bounce a ball and break bricks. It features a retro neon aesthetic inspired by classic arcade games.

---

## 🚀 Getting Started

### 🔧 Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/Jorgesq9/BrickBattle.git
   ```
2. Navigate to the project folder:
   ```sh
   cd BrickBattle
   ```
3. Open `index.html` in your browser and start playing!

---

## 📜 Development Steps

### 🏗️ **HTML**
#### Day 1
- Created the basic structure of `index.html`.
- Added three separate `<div>` elements for different game screens: **Start, Game, and End**.
- Linked the HTML file to the **CSS** and **JavaScript** files.

#### Day 2
- Fixed an issue with the **Game Over** screen, ensuring it correctly displayed the intended content.

---

### 🎨 **CSS**
- **`#Starting-Screen`** → Contains the **game title**, **start button**, and an animated background.
- **`#Gaming-Screen`** → Displays the **canvas** where the game is played.
- **`#End-Screen`** → Shows the **Game Over** screen with retry options.
- **Neon and arcade-inspired fonts and animations** were added for a retro feel.

---

### 🎮 **JavaScript**
#### Day 1
- Created `game.js` to manage screen transitions (Start → Game → Game Over).

#### Day 2
- Implemented **three game screens** using the `GameScreens` class.
- Created buttons for **Retry** and **Start Screen** transitions.

#### Day 3
- Added the `Player` class to store **player name and score**.
- Implemented methods to:
  - **Ask for player name** via `prompt()`.
  - **Display player name and score** dynamically on the game screen.

---

## 🕹️ Game Logic (script.js)
#### Day 1
1. **Created `drawMap()` function** to continuously update the game frame.
2. **Implemented ball physics**:
   - Used `context.arc()` to draw the ball.
   - Made the ball bounce when colliding with screen edges.
3. **Added paddle mechanics**:
   - Drawn using `fillRect()`.
   - Controlled with **left** and **right** arrow keys.

#### Day 2
1. **Added ball-paddle collision detection**.
2. **Implemented `startGame()`** to ensure the game starts only when needed.
3. **Created `retryGame()` and `resetGame()`**:
   - Resets ball, paddle, and bricks after losing.
4. **Drew the bricks**:
   - Used a matrix to generate rows and columns.
   - Randomized brick colors for variety.

#### Day 3
1. **Brick collision detection**:
   - Ball changes direction upon hitting a brick.
   - Score increases for each broken brick.
   - If all bricks are destroyed, the player wins.
2. **Game Over and Win conditions implemented**.

---

## 🎨 UI/UX Enhancements
- **Neon glow effects** for titles and buttons.
- **Animated buttons** for better interaction.
- **Score display with dynamic updates**.
- **Fully responsive design** for mobile and desktop.

---

## 🛠️ Technologies Used
- **HTML5** → Structure and game layout
- **CSS3** → Styling and animations
- **JavaScript (Canvas API)** → Game logic and interactions

---

### 🕹️ Gameplay
http://brickbattle.jorgeesquivafullstack.es/

---

## 🤝 Contributing
If you'd like to contribute, feel free to fork the repo and submit a pull request!

---

## 📜 License
This project is open-source and available under the **MIT License**.

---

## 📬 Contact
Created by **Jorge Esquiva** ✨
- GitHub: [Jorgesq9](https://github.com/Jorgesq9)
- Portfolio: [jorgeesquivafullstack.es](https://jorgeesquivafullstack.es)

🎉 Enjoy the game! 🚀




