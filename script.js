const Board = document.getElementById('game-board');
const instructionText = document.getElementById('instruction-text');
const logo = document.getElementById('logo');

const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('highscore');

const eatSound = document.getElementById('eat-sound');
const deathSound = document.getElementById('death-sound');
const bgmusic = document.getElementById('bg-music');

const gridSize = 20; 
let snake = [{x: 10, y: 10}]; 
const foodTypes = ['🐭', '🐸', '🦗', '🦎', '🥚']; 
let currentFoodIcon = '🐭';
let food = generateFood();
let highScore = 0;
let direction = 'right';
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;

function draw() {
  Board.innerHTML = '';
  drawSnake();
  drawFood();
  updateScore();
}

function drawSnake() {
  snake.forEach((segment, index) => {
    const isHead = index === 0;
    const snakeType = isHead ? 'snake-head' : 'snake';
    const snakeElement = createGameElement('div', snakeType);
    if (isHead) snakeElement.classList.add(`facing-${direction}`);
    setPosition(snakeElement, segment);
    Board.appendChild(snakeElement);
  });
}

function createGameElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}

function drawFood() {
  if (gameStarted) {
    const foodElement = createGameElement('div', 'food');
    foodElement.innerText = currentFoodIcon;
    setPosition(foodElement, food);
    Board.appendChild(foodElement);
  }
}

function generateFood() {
  const x = Math.floor(Math.random() * gridSize) + 1; 
  const y = Math.floor(Math.random() * gridSize) + 1;
  currentFoodIcon = foodTypes[Math.floor(Math.random() * foodTypes.length)];
  return {x, y};
}

function move() {
  const head = { ...snake[0] };
  switch(direction) {
    case 'up': head.y--; break;
    case 'down': head.y++; break;
    case 'left': head.x--; break;
    case 'right': head.x++; break;
  }
  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    food = generateFood();
    if(eatSound) eatSound.play();
    increaseSpeed();
    resetInterval();
  } else {
    snake.pop();
  }
}

function resetInterval() {
  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    move();
    checkCollision();
    draw();
  }, gameSpeedDelay);
}

function startGame() {
  gameStarted = true;
  instructionText.style.display = 'none';
  logo.style.display = 'none';
  if (bgmusic) {
    bgmusic.currentTime = 0;
    bgmusic.play();
  }
  resetInterval();
}

function handleKeyPress(event) {
  if (!gameStarted && (event.code === 'Space' || event.key === ' ')) {
    startGame();
  } else {
    switch (event.key) {
      case 'ArrowUp': if (direction !== 'down') direction = 'up'; break;
      case 'ArrowDown': if (direction !== 'up') direction = 'down'; break;
      case 'ArrowLeft': if (direction !== 'right') direction = 'left'; break;
      case 'ArrowRight': if (direction !== 'left') direction = 'right'; break;
    }
  }
}

document.addEventListener('keydown', handleKeyPress);

function increaseSpeed() {
  if (gameSpeedDelay > 50) gameSpeedDelay -= 5;
}

function checkCollision() {
  const head = snake[0];
  if (head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
    resetGame();
    return; // Exit so it doesn't trigger twice
  }
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      resetGame();
      return;
    }
  }
}

function resetGame() {
  
  if (!gameStarted) return; 

  updateHighScore();
  stopGame(); // Stop logic first

  if (deathSound) {
    deathSound.currentTime = 0;
    deathSound.play();
  }

  snake = [{ x: 10, y: 10 }];
  food = generateFood();
  direction = 'right';
  gameSpeedDelay = 200;
  updateScore();
}

function updateScore() {
  const currentScore = snake.length - 1;
  // Fixed the variable name to scoreElement
  scoreElement.textContent = currentScore.toString().padStart(3, '0');
}

function stopGame() {
  clearInterval(gameInterval);
  gameStarted = false;
  if (bgmusic) bgmusic.pause();
  instructionText.style.display = 'block';
  logo.style.display = 'block';
}

function updateHighScore() {
  const currentScore = snake.length - 1;
  if (currentScore > highScore) {
    highScore = currentScore;
    highScoreElement.textContent = highScore.toString().padStart(3, '0'); 
  }
  highScoreElement.style.display = 'block';
}
 
var click = 0;

btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  click++;
  if (click % 2 === 1) {
    document.body.style.backgroundColor = " 	#554433";
    document.querySelector('#instruction-text').style.color = "#554433";
    document.querySelector('.game-border-3').style.backgroundColor = "#443333";
    document.querySelector('#logo').style.backgroundColor = "#443333";
    document.querySelector('.game-border-1').style.backgroundColor = "#997755";
    document.querySelector('.btn').innerText = "LIGHT MODE";
  } else {
    document.body.style.backgroundColor = " 	#f0f0f0";
    document.querySelector('#instruction-text').style.color = "#000000";
    document.querySelector('.game-border-3').style.backgroundColor = "#ffffff";
    document.querySelector('#logo').style.backgroundColor = "#ffffff";
    document.querySelector('.game-border-1').style.backgroundColor = "#cccccc";
    document.querySelector('.btn').innerText = "DARK MODE";
  }

});



