# 🐍 Modern Snake Game

A classic arcade-style Snake game built with a clean, modern UI and realistic gameplay elements. This project features dynamic difficulty, high-score tracking, and immersive sound effects—all running on pure web technologies.
https://python-games-two.vercel.app/
# ✨ Features

     Realistic Prey System: Instead of generic blocks, the snake hunts for real prey like mice (🐭), frogs (🐸), and crickets (🦗).

    Immersive Audio: -   Background music that starts with the game.

     Satisfying "crunch" sounds when eating.

        Unique death sound effect upon collision.

   Dynamic Difficulty: The game speed increases as you eat, challenging your reflexes as the snake grows longer.

   Head Rotation: The snake's head visually rotates to face the direction of movement (Up, Down, Left, Right).

    High Score Tracking: Your best performance is saved locally so you can always try to beat your record.

   Retro Design: A stylized game board with "glassmorphism" borders and a neon-inspired interface.

# 🎮 How to Play

    Start: Press the Spacebar to begin the game and start the music.

   Move: Use the Arrow Keys (↑ ↓ ← →) to navigate the snake.

   Objective: Eat the food to grow and increase your score.

    Avoid: Do not hit the walls or the snake's own body.

    Restart: If you die, the game resets. Press Spacebar to try again!

# 🛠️ Tech Stack

 HTML5: Structured the game board and UI elements.

CSS3: Custom styling, animations, and head rotation logic.

    Vanilla JavaScript: Core game engine, collision detection, and audio management.

   Vercel: Deployment and hosting.

# 📁 Project Structure
```

snake-game/
├── index.html          # Main entry point (HTML)
├── style.css           # All game styling and animations
├── script.js           # Core game logic and engine
├── assets/             # Folder for all external files
│   ├── images/         # Snake sprites and food icons
│   │   ├── logo.png
│   │   └── carrot_sprite.png
│   └── sounds/         # MP3/WAV audio files
│       ├── bg-music.mp3
│       ├── eat.mp3
│       └── death.mp3
└── README.md           # Project documentation
```
# 🚀 Installation & Local Development

To run this project locally:

    Clone the repository:
    Bash

    git clone https://github.com/your-username/your-repo-name.git

    Open index.html in your favorite web browser.

    Enjoy the game!
