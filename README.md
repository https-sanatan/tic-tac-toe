# Tic Tac Toe Game

A simple, responsive **Tic Tac Toe** game built using **HTML, CSS, and JavaScript**.  
This project focuses on core JavaScript logic, DOM manipulation, and user-friendly UI.

---

## 🚀 Features

- 🎮 Two-player game (X vs O)
- 🧠 Winner detection logic
- 🤝 Draw detection
- 🔄 Reset game functionality
- ✨ Visual flash effect on win/draw
- 📱 Responsive design using `vmin` units
- ❌ Prevents multiple clicks on the same box

---

## 🛠️ Technologies Used

- **HTML5** – Structure
- **CSS3** – Styling & responsiveness
- **JavaScript (Vanilla JS)** – Game logic & DOM manipulation

---

## 🧩 How the Game Works

- Players take turns clicking on the grid
- The game tracks moves using an internal array
- After every move:
  - It checks for a winner
  - If no winner and the board is full → Match Draw
- Once the game ends, all boxes are disabled
- Click **Reset Game** to start again